import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '@/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LOCAL_STORAGE_AUTH_KEY } from '@/constants/auth';
import parseJSONFromLocalStorage from '@/utils/parseLocalStorageJSON';
import { IUser } from '@/types/UserType';

interface AuthState {
  user: IUser | null;
  status: string | undefined;
  error: string | undefined;
}

const user = parseJSONFromLocalStorage(LOCAL_STORAGE_AUTH_KEY);

const initialState: AuthState = {
  user,
  status: '',
  error: '',
};

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      name: name,
      email: email,
    });

    const userDetails: IUser = {
      userData: {
        id: user.uid,
        name: name,
        email: user.email,
      },
      accessToken: await user.getIdToken(),
    };

    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(userDetails));
    login({
      email: email,
      password: password,
    });

    return userDetails;
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDataSnapshot = await getDoc(doc(db, 'users', user.uid));
    const userData = userDataSnapshot.data();

    const userDetails: IUser = {
      userData: {
        id: user.uid,
        name: userData?.name || '',
        email: user.email || '',
      },
      accessToken: await user.getIdToken(),
    };

    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(userDetails));

    return userDetails;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'idle';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'idle';
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

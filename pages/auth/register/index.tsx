import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { register } from '../authSlice';
import { useAppSelector } from '@/redux/hooks';
import { LOCAL_STORAGE_AUTH_KEY } from '@/constants/auth';
import { useNotification } from '@/components/Notification/NotificationContext';
import Loading from '@/components/Loading';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const status = useAppSelector((state) => state.auth.status);
  const error = useAppSelector((state) => state.auth.error);
  const { showNotification } = useNotification();

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  useEffect(() => {
    if (user && localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) {
      router.push('/');
    }
  });

  const registerUser = async () => {
    if (!name || !email || !password) {
      showNotification({
        type: 'info',
        message: 'Please fill out all fields.',
      });
      return;
    }

    try {
      const response = await dispatch(register({ name, email, password }));
      if (response.meta.requestStatus === 'fulfilled') {
        router.push('/');
      } else {
        showNotification({
          type: 'info',
          message: error,
        });
      }
    } catch (error) {
      console.log(error);
      showNotification({
        type: 'error',
        message: 'An unexpected error occurred.',
      });
    }
  };

  return (
    <>
      {status === 'loading' && <Loading />}

      <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="w-full max-w-[380px] bg-white border-gray rounded-lg px-8 py-10 text-center flex items-center flex-col">
          <div className="flex gap-3 flex-col w-full items-center mb-8">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#3751FF" />
            </svg>
            <div className="text-gray font-bold text-center w-full leading-6">B2Metric</div>
          </div>

          <div className="flex gap-3 flex-col w-full items-center mb-12">
            <div className="font-bold text-2xl text-black leading-7">Register on B2Metric</div>
            <div className="text-darkGray font-normal text-sm leading-5">
              Enter your name, surname, email and password below
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 mb-6">
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="name" className="uppercase text-xs text-darkGray leading-4">
                Full Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full border border-gray rounded-lg px-4 py-3"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="email" className="uppercase text-xs text-darkGray leading-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray rounded-lg px-4 py-3"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 text-left">
              <label htmlFor="password" className="uppercase text-xs text-darkGray leading-4">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full border border-gray gap-2 rounded-lg flex items-center pt-4 pb-4 pl-4 pr-9 py-3"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={togglePasswordVisiblity}
                  className="text-darkGray cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => registerUser()}
            className="w-full bg-blue text-white rounded-lg px-6 py-4 font-semibold text-sm hover:bg-opacity-75 transition-all"
          >
            Sign Up
          </button>

          <div className="mt-8 flex gap-1">
            <span className="text-darkGray text-sm font-semibold leading-5">
              Already have an account?
            </span>
            <Link
              href="/auth/login"
              className="text-blue text-sm font-semibold leading-5 hover:opacity-75 transition-all cursor-pointer"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;

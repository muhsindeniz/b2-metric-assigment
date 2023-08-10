import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import Login from './auth/login'; 
import HomePage from './home';
import { LOCAL_STORAGE_AUTH_KEY } from '@/constants/auth';

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  const [isClientLoaded, setClientLoaded] = useState(false);  // Bu state'i ekledik
  const router = useRouter();

  useEffect(() => {
    // İstemci yüklendiğinde bir kez çalışacak
    setClientLoaded(true);
  }, []);

  useEffect(() => {
    if (isClientLoaded) {
      const isAuth = !!user || !!localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
      if (!isAuth && router.pathname !== '/auth/login') {
        router.push('/auth/login');
      }
    }
  }, [user, isClientLoaded]);

  if (!isClientLoaded) return null;  // İstemci yüklenene kadar bir şey render etme

  if (!user) return <Login />;

  return (
    <div className="bg-gray">
      <HomePage />
    </div>
  );
}

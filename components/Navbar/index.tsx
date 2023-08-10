import { logout } from '@/pages/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const userInfo = useAppSelector((state) => state.auth.user?.userData);
  const router = useRouter();

  const logOut = () => {
    dispatch(logout());
    router.push("/auth/login")
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      document.addEventListener('mousedown', (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      });
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full max-w-full sm:max-w-[calc(100%-256px)] ml-auto">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start px-4">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 "
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <div className="text-2xl font-bold">{title}</div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3 relative">
              <div className="flex items-center gap-3 font-semibold">
                {userInfo?.name}
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                  aria-expanded="false"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    width={8}
                    height={8}
                    className="w-8 h-8 rounded-full"
                    src="https://pixlok.com/wp-content/uploads/2021/10/Profile_Icon-mc42.png"
                    alt="user photo"
                  />
                </button>
              </div>

              {isOpen && (
                <div
                  ref={dropdownRef}
                  className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow absolute right-3 top-6"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 " role="none">
                      {userInfo?.name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate " role="none">
                      {userInfo?.email}
                    </p>
                  </div>
                  <ul
                    className="block px-4 py-2 text-sm hover:bg-gray"
                    role="menuitem"
                  >
                    <li onClick={() => logOut()} className='cursor-pointer text-gray-700'>Sign out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

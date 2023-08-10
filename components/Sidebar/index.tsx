import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-9 transition-transform -translate-x-full bg-black border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex pb-4 px-8 gap-3 w-full items-center mb-7">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#3751FF" />
          </svg>
          <div className="text-lightGray font-bold w-full leading-6">B2Metric</div>
        </div>
        <div className="h-full pb-4 overflow-y-auto bg-black">
          <ul className="space-y-2 font-medium">
            <li
              className={`${
                isActive('/') ? 'bg-gray text-lightGray' : ''
              } hover:bg-gray bg-opacity-10 hover:bg-opacity-10`}
            >
              <Link
                href="/"
                className={`flex items-center py-4 px-8 text-base rounded-lg group ${
                  isActive('/') ? 'text-lightBlue' : 'text-lightGray'
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
                    fill="#DDE2FF"
                  />
                </svg>
                <span className="ml-6">Overview</span>
              </Link>
            </li>
            <li
              className={`${
                isActive('/users') ? 'bg-gray text-lightGray' : ''
              } hover:bg-gray bg-opacity-10 hover:bg-opacity-10`}
            >
              <Link
                href="/users"
                className={`flex items-center py-4 px-8 text-base rounded-lg group ${
                  isActive('/users') ? 'text-lightBlue' : 'text-lightGray'
                }`}
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.99375 9.01875L8.5 15L7.5 10.75L8.5 9H5.5L6.5 10.75L5.5 15L4.00625 9.01875C1.77812 9.125 0 10.9469 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.9469 12.2219 9.125 9.99375 9.01875Z"
                    fill="#9FA2B4"
                  />
                </svg>
                <span className="flex-1 ml-6">Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;

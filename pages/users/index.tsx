import Table from '@/components/Table';
import { usersColumns, usersData } from '@/data/dummyData';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
});

const Sidebar = dynamic(() => import('@/components/Sidebar'), {
  ssr: false,
});

const Users = () => {
  return (
    <>
      <Navbar title="Users" />
      <Sidebar />

      <div className="pt-14 px-8 sm:ml-64 mb-8">
        <div className="w-full flex flex-col gap-12 bg-white border border-gray rounded-lg">
          <div className="font-bold text-lg leading-6 px-8 py-6 ">All Users</div>

          <div>
            <Table data={usersData} columns={usersColumns} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;

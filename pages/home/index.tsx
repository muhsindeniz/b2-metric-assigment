import React from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
});

const Sidebar = dynamic(() => import('@/components/Sidebar'), {
  ssr: false,
});

import { chartData, chartOptions } from '@/data/dummyData';
import LineChart from '@/components/Charts/LineChart';

const OverviewPage = () => {
  if (!chartData) return <div>Loading...</div>;

  return (
    <>
      <Navbar title="Overview" />

      <Sidebar />

      <div className="pt-14 px-8 sm:ml-64 mb-8">
        <div className="grid grid-cols-1 justify-between xl:grid-cols-4 lg:grid-cols-2 gap-8">
          <div className="group hover:border-blue hover:shadow-lightBlue w-full bg-white px-8 py-6 border border-gray rounded-lg flex flex-col gap-3 items-center text-center hover:cursor-pointer">
            <div className="leading-6 text-lg text-darkGray font-bold group-hover:text-blue transition-all">
              Active Users
            </div>
            <div className="leading-8 text-4xl text-black font-bold group-hover:text-blue transition-all">
              14.592
            </div>
          </div>
          <div className="group hover:border-blue hover:shadow-lightBlue w-full bg-white px-8 py-6 border border-gray rounded-lg flex flex-col gap-3 items-center text-center hover:cursor-pointer">
            <div className="leading-6 text-lg text-darkGray font-bold group-hover:text-blue transition-all">
              Sessions
            </div>
            <div className="leading-8 text-4xl text-black font-bold group-hover:text-blue transition-all">
              16.921
            </div>
          </div>
          <div className="group hover:border-blue hover:shadow-lightBlue w-full bg-white px-8 py-6 border border-gray rounded-lg flex flex-col gap-3 items-center text-center hover:cursor-pointer">
            <div className="leading-6 text-lg text-darkGray font-bold group-hover:text-blue transition-all">
              Returned Users
            </div>
            <div className="leading-8 text-4xl text-black font-bold group-hover:text-blue transition-all">
              4.562
            </div>
          </div>
          <div className="group hover:border-blue hover:shadow-lightBlue w-full bg-white px-8 py-6 border border-gray rounded-lg flex flex-col gap-3 items-center text-center hover:cursor-pointer">
            <div className="leading-6 text-lg text-darkGray font-bold group-hover:text-blue transition-all">
              Registered Users
            </div>
            <div className="leading-8 text-4xl text-black font-bold group-hover:text-blue transition-all">
              649
            </div>
          </div>
        </div>
        <div className="border flex flex-col lg:flex-row border-gray rounded-lg bg-white mt-8 w-full">
          <div className="w-3/4 p-8 flex flex-col gap-2">
            <div className="font-bold text-lg">{chartOptions.title.text}</div>
            <div className="flex justify-between">
              <div className="text-xs font-normal leading-4 text-darkGray">
                {chartOptions.plugins.title.beforeTitle()}
              </div>
              <div className="flex gap-8">
                {chartData.datasets.map((dataset, index) => (
                  <div key={index} className="flex items-center mb-1">
                    <div
                      style={{ backgroundColor: dataset.borderColor }}
                      className={`w-5 h-0.5 mr-3`}
                    ></div>
                    <span>{dataset.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <LineChart data={chartData} options={chartOptions} />
          </div>
          <div className="w-full lg:w-1/4 border-l border-gray">
            <div className="px-8 h-full py-8 flex flex-col justify-between">
              <div className="w-full flex gap-2 flex-col border-b border-gray pb-6">
                <div className="text-base font-semibold text-center text-darkGray leading-5">
                  Active Sessions
                </div>
                <div className="font-bold text-2xl text-center text-black leading-8">449</div>
              </div>
              <div className="w-full flex gap-2 flex-col border-b border-gray py-6">
                <div className="text-base font-semibold text-center text-darkGray leading-5">
                  Received
                </div>
                <div className="font-bold text-2xl text-center text-black leading-8">426</div>
              </div>
              <div className="w-full flex gap-2 flex-col border-b border-gray py-6">
                <div className="text-base font-semibold text-center text-darkGray leading-5">
                  Average Session Time
                </div>
                <div className="font-bold text-2xl text-center text-black leading-8">33m</div>
              </div>
              <div className="w-full flex gap-2 flex-col border-b border-gray py-6">
                <div className="text-base font-semibold text-center text-darkGray leading-5">
                  Bounce Rate
                </div>
                <div className="font-bold text-2xl text-center text-black leading-8">47%</div>
              </div>
              <div className="w-full flex gap-2 flex-col border-gray pt-6">
                <div className="text-base font-semibold text-center text-darkGray leading-5">
                  Events per User
                </div>
                <div className="font-bold text-2xl text-center text-black leading-8">36.22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;

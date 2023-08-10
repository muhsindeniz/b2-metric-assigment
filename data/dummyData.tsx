import { UserTableColumnTypes, UserTableDataTypes } from '@/types/UserType';
import Image from 'next/image';

function createGradient(ctx: CanvasRenderingContext2D, height: number, gradientColor: string) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, gradientColor + '0.1'); // Başlangıçta %10 opaklıkla
  gradient.addColorStop(1, gradientColor + '00'); // Sonunda tamamen şeffaf
  return gradient;
}

const formatDate = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(parsedDate);
};

const getRandomDate = (start: Date, end: Date): Date => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const getRandomName = (): string => {
  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dave',
    'Eva',
    'Frank',
    'Grace',
    'Hannah',
    'Isaac',
    'Jack',
  ];
  const surnames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Miller',
    'Davis',
    'Garcia',
    'Rodriguez',
    'Martinez',
  ];

  return `${names[Math.floor(Math.random() * names.length)]} ${
    surnames[Math.floor(Math.random() * surnames.length)]
  }`;
};

export const chartData = {
  labels: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
  ],
  datasets: [
    {
      label: 'Today',
      data: Array.from({ length: 23 }, () => Math.floor(Math.random() * 61)),
      fill: true,
      backgroundColor: function (ctx: { chart: Chart }) {
        const chart = ctx.chart;
        const ctx2 = chart.ctx as CanvasRenderingContext2D;
        return createGradient(ctx2, chart.height!, 'rgba(55, 81, 255, ');
      },
      borderColor: '#3751FF',
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: 'Yesterday',
      data: Array.from({ length: 23 }, () => Math.floor(Math.random() * 61)),
      fill: true,
      backgroundColor: function (ctx: { chart: Chart }) {
        const chart = ctx.chart;
        const ctx2 = chart.ctx as CanvasRenderingContext2D;
        return createGradient(ctx2, chart.height!, 'rgba(55, 81, 255, ');
      },
      borderColor: '#3751FF',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

export const chartOptions = {
  title: {
    display: true,
    text: 'Today’s trends',
    fontSize: 30,
  },
  scales: {
    y: {
      position: 'right',
      beginAtZero: true,
      ticks: {
        stepSize: 10,
        max: 100,
        min: 0,
      },
    },
  },
  plugins: {
    title: {
      beforeTitle: function () {
        return ['as of 25 May 2019, 09:41 PM'];
      },
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  },
};

const usersData: UserTableDataTypes[] = [
  {
    id: '1',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'John Doe',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2019-05-12'),
    },
    registerDate: new Date('2021-01-15'),
    segment: 'new',
  },
  {
    id: '2',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'Jane Smith',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2021-02-03'),
    },
    registerDate: new Date('2019-06-20'),
    segment: 'new',
  },
  {
    id: '3',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'Robert Brown',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2019-10-05'),
    },
    registerDate: new Date('2020-03-05'),
    segment: 'new',
  },
  {
    id: '4',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'Emily Johnson',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2019-07-14'),
    },
    registerDate: new Date('2018-11-10'),
    segment: 'new',
  },
  {
    id: '5',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'William Davis',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2021-08-09'),
    },
    registerDate: new Date('2020-07-22'),
    segment: 'new',
  },
  {
    id: '6',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'Olivia Wilson',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2018-03-25'),
    },
    registerDate: new Date('2017-02-15'),
    segment: 'new',
  },
  {
    id: '7',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'James Taylor',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2020-01-21'),
    },
    registerDate: new Date('2021-04-09'),
    segment: 'new',
  },
  {
    id: '8',
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: 'Sophia Jones',
    customer: {
      name: 'Tom Cruise',
      date: new Date('2020-12-11'),
    },
    registerDate: new Date('2022-08-01'),
    segment: 'new',
  },
];

while (usersData.length < 48) {
  const id = (usersData.length + 1).toString();
  const username = getRandomName();
  const registerDate = getRandomDate(new Date('2017-01-01'), new Date('2022-08-01'));
  const customerDate = getRandomDate(new Date('2017-01-01'), new Date('2022-08-01'));

  usersData.push({
    id: id,
    imageUrl: 'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    username: username,
    customer: {
      name: 'Tom Cruise',
      date: customerDate,
    },
    registerDate: registerDate,
    segment: 'new',
  });
}

export const usersColumns: UserTableColumnTypes[] = [
  {
    label: 'User Details',
    accessor: 'username',
    render: (row) => (
      <div className="flex items-center gap-2">
        <Image
          width={46}
          height={46}
          src={row.imageUrl}
          alt={row.username}
          style={{ height: '44px', width: '44px', objectFit: 'cover', borderRadius: '50%' }}
        />
        <span>{row.username}</span>
      </div>
    ),
  },
  {
    label: 'Customer Name',
    accessor: 'customer',
    render: (row) => {
      return (
        <div className="flex flex-col gap-1">
          <div>{row.customer.name}</div>
          <div className="text-darkGray">{formatDate(row.customer.date)}</div>
        </div>
      );
    },
  },
  {
    label: 'Register Date',
    accessor: 'registerDate',
    render: (row) => <span>{formatDate(row.registerDate)}</span>,
  },
  {
    label: 'Segment',
    accessor: 'segment',
    render: (row) => (
      <button className="bg-black hover:bg-blue-700 font-bold py-1 px-5 text-white rounded transition-all hover:opacity-70">
        {row.segment}
      </button>
    ),
  },
];

export { usersData };

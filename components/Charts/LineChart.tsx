import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, PointElement, LineElement } from 'chart.js';

interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    fill?: boolean;
    backgroundColor?: string | ((context: any) => string | CanvasGradient);
  }[];
}

interface LineChartProps {
  data: LineChartData;
  options?: any;
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  const chartRef = useRef(null);

  Chart.register(LinearScale);

  Chart.register(CategoryScale);

  Chart.register(PointElement);

  Chart.register(LineElement);

  useEffect(() => {
    if (chartRef.current) {
      const currentChartInstance = chartRef.current as any;
      // currentChartInstance.destroy();
    }
  }, [data, options]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Line className='w-full' ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineChart;

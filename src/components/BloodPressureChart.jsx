import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Systolic from './Systolic';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({
  diagnosis_history,
  handleMonthSelect,
  blood_pressure,
}) => {
  const data = {
    labels: diagnosis_history.map((item) => `${item.month}, ${item.year}`),
    datasets: [
      {
        data: diagnosis_history.map(
          (item) => item.blood_pressure.systolic.value
        ),
        borderColor: '#C26EB4',
        pointBackgroundColor: '#E66FD2',
        pointRadius: 6,
        tension: 0.4,
      },
      {
        data: diagnosis_history.map(
          (item) => item.blood_pressure.diastolic.value
        ),
        borderColor: '#7E6CAB',
        pointBackgroundColor: '#8C6FE6',
        pointRadius: 6,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Blood Pressure History',
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="bg-[#F4F0FE] p-4 rounded-lg flex justify-between gap-x-4">
      <div className="flex-grow">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Blood Pressure</h2>

          <select
            name="month"
            className="font-normal cursor-pointer mr-10 bg-transparent focus:outline-none"
            onChange={(e) => handleMonthSelect(e.target.value)}
          >
            {diagnosis_history.map((diagnosis, index) => (
              <option key={index} value={index}>
                {diagnosis.month} {diagnosis.year}
              </option>
            ))}
          </select>
        </div>
        <Line data={data} options={options} />
      </div>
      <Systolic blood_pressure={blood_pressure} />
    </div>
  );
};

export default BloodPressureChart;

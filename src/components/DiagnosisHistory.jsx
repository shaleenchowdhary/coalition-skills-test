import { useEffect, useState } from 'react';
import BloodPressureChart from './BloodPressureChart';
import DiagnosisDetails from './DiagnosisDetails';

const DiagnosisHistory = ({ diagnosis_history }) => {
  const [month, setMonth] = useState(diagnosis_history[0]);

  useEffect(() => {
    if (diagnosis_history && diagnosis_history.length > 0) {
      setMonth(diagnosis_history[0]);
    }
  }, [diagnosis_history]);

  const handleMonthSelect = (index) => setMonth(diagnosis_history[index]);
  return (
    <div className="w-full rounded-xl p-4 bg-[white]">
      <h2 className="text-xl mb-4 font-extrabold">Diagnosis History</h2>
      <BloodPressureChart
        diagnosis_history={diagnosis_history}
        handleMonthSelect={handleMonthSelect}
        blood_pressure={month.blood_pressure}
      />
      <DiagnosisDetails month={month} />
    </div>
  );
};
export default DiagnosisHistory;

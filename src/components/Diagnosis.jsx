import DiagnosisHistory from './DiagnosisHistory';
import DiagnosisList from './DiagnosisList';

const Diagnosis = ({ patient }) => {
  return (
    <div className="flex-grow text-sm">
      <DiagnosisHistory diagnosis_history={patient.diagnosis_history} />
      <DiagnosisList diagnostic_list={patient.diagnostic_list} />
    </div>
  );
};
export default Diagnosis;

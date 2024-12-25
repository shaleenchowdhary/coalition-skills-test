import Diagnosis from './Diagnosis';
import Profile from './Profile';
import PatientsList from './PatientsList';
import { useState, useEffect } from 'react';

const MainContent = ({ patients }) => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (patients.length > 0) {
      setPatient(patients[0]);
    }
  }, [patients]);

  const handleSelect = (patient) => setPatient(patient);

  console.log('Current patient:', patient);
  return (
    <div className="my-6 flex gap-x-6">
      <PatientsList patients={patients} handleSelect={handleSelect} />
      {patient && (
        <>
          <Diagnosis patient={patient} />
          <Profile patient={patient} />
        </>
      )}
    </div>
  );
};
export default MainContent;

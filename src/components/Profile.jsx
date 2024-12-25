import LabResults from './LabResults';
import PatientDetails from './PatientDetails';

const Profile = ({ patient }) => {
  return (
    <div className="w-1/4">
      <PatientDetails patient={patient} />
      <LabResults lab_results={patient.lab_results} />
    </div>
  );
};
export default Profile;

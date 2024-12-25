const PatientDetails = ({ patient }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 text-sm">
      <img
        src={patient.profile_picture}
        alt="patient's profile picture"
        className="mx-auto my-4 text-center w-40 h-40"
      />
      <p className="font-extrabold text-xl mb-6 text-center">{patient.name}</p>
      <div className="flex justify-start items-center gap-x-3 mb-4">
        <div>
          <img src="/Images/BirthIcon.svg" alt="birth icon" />
        </div>
        <div className="">
          <p>Date Of Birth</p>
          <p className="font-semibold">{patient.date_of_birth}</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-3 mb-4">
        <div>
          <img src="/Images/FemaleIcon.svg" alt="female icon" />
        </div>
        <div className="">
          <p>Gender</p>
          <p className="font-semibold">{patient.gender}</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-3 mb-4">
        <div>
          <img src="/Images/PhoneIcon.svg" alt="phone icon" />
        </div>
        <div className="">
          <p>Contact Info.</p>
          <p className="font-semibold">{patient.phone_number}</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-3 mb-4">
        <div>
          <img src="/Images/PhoneIcon.svg" alt="phone icon" />
        </div>
        <div className="">
          <p>Emergency Contact</p>
          <p className="font-semibold">{patient.emergency_contact}</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-3 mb-4">
        <div>
          <img src="/Images/InsuranceIcon.svg" alt="insurance icon" />
        </div>
        <div className="">
          <p>Insurance Provider</p>
          <p className="font-semibold">{patient.insurance_type}</p>
        </div>
      </div>
      <div className="text-center p-2">
        <button className="py-2 px-8 bg-[#01F0D0] rounded-full text-xs font-bold">
          Show All Information
        </button>
      </div>
    </div>
  );
};
export default PatientDetails;

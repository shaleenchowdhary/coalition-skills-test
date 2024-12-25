const PatientsList = ({ patients, handleSelect }) => {
  return (
    <div className="font-bold pb-2 h-[800px] flex flex-col rounded-xl bg-white w-1/4 text-sm">
      <div className="h-auto font-extrabold flex items-center justify-between text-xl gap-x-2 m-4">
        <h2>Patients</h2>
        <img
          className="h-5 w-5 cursor-pointer"
          src="/Images/search_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Dr. Jose Simmons"
        />
      </div>
      <div className="flex-grow overflow-auto scrollbar-custom">
        {patients.map((patient) => (
          <div
            key={`${patient.name}-${patient.age}`}
            className="flex items-center justify-between gap-x-1 p-4 hover:bg-[#D8FCF7] cursor-pointer"
            onClick={() => handleSelect(patient)}
          >
            <div className="flex text-nowrap items-center gap-2">
              <div className="h-12 w-12 rounded-full">
                <img
                  className="h-full w-full object-contain cursor-pointer"
                  src={patient.profile_picture}
                  alt={patient.name}
                />
              </div>
              <div>
                <div className="name leading-6">{patient.name}</div>
                <div className="designation font-normal">
                  {patient.gender}, {patient.age}
                </div>
              </div>
            </div>

            <div className="">
              <div className="w-5 cursor-pointer">
                <img
                  className="w-full object-contain"
                  src="/Images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                  alt="menu options icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PatientsList;

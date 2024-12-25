const DiagnosisDetails = ({ month }) => {
  return (
    <>
      <div className="flex gap-4 mt-4 font-extrabold">
        <div className="w-full p-4 rounded-lg bg-[#E0F3FA]">
          <img
            className="h-24 w-24 mb-3"
            src="/Images/respiratory rate.svg"
            alt="respiratory rate"
          />
          <p className="text-nowrap font-semibold">Respiratory Details</p>
          <p className="text-xl mb-2">{month.respiratory_rate.value}</p>
          <p className="font-normal">{month.respiratory_rate.levels}</p>
        </div>
        <div className="w-full p-4 rounded-lg bg-[#FFE6E9]">
          <img
            className="h-24 w-24 mb-3"
            src="/Images/temperature.svg"
            alt="respiratory rate"
          />
          <p className="text-nowrap font-semibold">Temperature</p>
          <p className="text-xl mb-2">{month.temperature.value}</p>
          <p className="font-normal">{month.temperature.levels}</p>
        </div>
        <div className="w-full p-4 rounded-lg bg-[#FFE6F1]">
          <img
            className="h-24 w-24 mb-3"
            src="/Images/HeartBPM.svg"
            alt="respiratory rate"
          />
          <p className="text-nowrap font-semibold">Heart Rate</p>
          <p className="text-xl mb-2">{month.heart_rate.value}</p>
          <p className="font-normal">{month.heart_rate.levels}</p>
        </div>
      </div>
    </>
  );
};
export default DiagnosisDetails;

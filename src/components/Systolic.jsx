const Systolic = ({ blood_pressure }) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="bg-[#E66FD2] w-3 h-3 rounded-full"></div>
        <p>Systolic</p>
      </div>
      <p className="font-extrabold text-xl my-1">
        {blood_pressure.systolic.value}
      </p>
      <div className="flex gap-x-2">
        <img src="Images/ArrowUp.svg" alt="up arrow" />
        <p className="text-nowrap">{blood_pressure.systolic.levels}</p>
      </div>
      <div className="w-full h-0.5 border-b-[#CBC8D4] border-2 my-4"></div>
      <div className="flex items-center gap-2">
        <div className="bg-[#8C6FE6] w-3 h-3 rounded-full"></div>
        <p>Diastolic</p>
      </div>
      <p className="font-extrabold text-xl my-1">
        {blood_pressure.diastolic.value}
      </p>
      <div className="flex gap-x-2">
        <img src="Images/ArrowDown.svg" alt="up arrow" />
        <p className="text-nowrap">{blood_pressure.diastolic.levels}</p>
      </div>
    </div>
  );
};
export default Systolic;

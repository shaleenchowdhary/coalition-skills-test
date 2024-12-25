const LabResults = ({ lab_results }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 mt-4">
      <h2 className="text-xl mb-4 font-extrabold">Lab Results</h2>
      <div className="max-h-52 h-fit overflow-auto scrollbar-custom">
        {lab_results.map((item, index) => (
          <div
            className="flex justify-between p-4 hover:bg-[#F6F7F8] cursor-pointer text-sm"
            key={index}
          >
            {item}
            <img
              src="/Images/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default LabResults;

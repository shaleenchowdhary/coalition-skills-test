const DiagnosisList = ({ diagnostic_list }) => {
  return (
    <div className="w-full p-4 bg-white mt-4 rounded-xl">
      <h2 className="text-xl mb-4 font-extrabold">Diagnosis List</h2>
      <div className="w-full font-bold flex bg-[#F6F7F8] p-4 rounded-full">
        <div className="w-[30%]">Problem/Diagnosis</div>
        <div className="w-[50%]">Description</div>
        <div className="w-[20%]">Status</div>
      </div>
      <div className="w-full max-h-44 h-fit overflow-auto scrollbar-custom">
        {diagnostic_list.map((data, index) => (
          <div
            className="flex w-full p-4 hover:bg-[#D8FCF7] cursor-pointer"
            key={index}
          >
            <div className="w-[30%]">{data.name}</div>
            <div className="w-[50%]">{data.description}</div>
            <div className="w-[20%]">{data.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DiagnosisList;

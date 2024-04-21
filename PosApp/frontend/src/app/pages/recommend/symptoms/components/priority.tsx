import React,{useState} from "react";

const Priority = ()=> {

  // 優先事項
  const [selectedPriority, setSelectedPriority] = useState<string>("");
  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelectedPriority(selected);
  };

  return (

    <>
      <div className="mt-5 ">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">優先事項</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="Priority"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selectedPriority}
          onChange={handlePriorityChange}
        >
        <option value="--</"> --</option>
        <option value="効果優先">効果優先</option>
        <option value="財形優先">財形優先</option>
        <option value="薬剤師におまかせ">薬剤師におまかせ</option>
        </select>
      </div>
    </>

  );

};

export default Priority
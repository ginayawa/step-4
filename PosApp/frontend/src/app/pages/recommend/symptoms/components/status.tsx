import React,{useState} from "react";

const Status = ()=> {

  // 症状
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelectedStatus(selected);
  };

  return (

    <>
      <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">患部の症状</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="status"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
        <option value="--</"> --</option>
        <option value="かゆい">かゆい</option>
        <option value="痛い">痛い</option>
        <option value="その他">その他</option>
        </select>
      </div>
    </>

  );

};

export default Status
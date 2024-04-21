import React,{useState} from "react";

const Part = ()=> {

  // 部位
  const [selectedPart, setSelectedPart] = useState<string>("");
  const handlePartChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
    const selected:any = e.target.value;
    setSelectedPart(selected);
  };


  return (

    <>
      <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">部位</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
          </div>
          <div>
            <select
              id="parts"
              className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
              value={selectedPart}
              onChange={handlePartChange}
            >
              <option value="--</"> --</option>
              <option value="顔"> 顔</option>
              <option value="背中"> 背中</option>
              <option value="デコルテ"> デコルテ</option>
            </select>
          </div>
      </div>
    </>

  );

};

export default Part
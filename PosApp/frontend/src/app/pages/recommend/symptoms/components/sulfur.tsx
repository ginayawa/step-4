import React,{useState} from "react";

const Sulfur = ()=> {

  // 硫黄のにおい
  const [selectedSulfur, setSelectedSulfur] = useState<string>("");
  const handleSulfurChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelectedSulfur(selected);
  };

  return (

    <>
      <div className="mt-5 ">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">硫黄のにおい</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="Sulfur"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selectedSulfur}
          onChange={handleSulfurChange}
        >
        <option value="--</"> --</option>
        <option value="気になる">気になる</option>
        <option value="気にならない">気にならない</option>
        </select>
      </div>
    </>

  );

};

export default Sulfur;
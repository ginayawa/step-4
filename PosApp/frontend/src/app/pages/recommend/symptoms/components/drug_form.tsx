import React,{useState} from "react";

const DrugForm = ()=> {

  // 財形
  const [selectedDrugForm, setSelectedDrugForm] = useState<string>("");
  const handleDrugFormChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
     const selected:any = e.target.value;
    setSelectedDrugForm(selected);
  };

  return (

    <>
      <div className="mt-5 ">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">希望の財形</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="DrugForm"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selectedDrugForm}
          onChange={handleDrugFormChange}
        >
        <option value="--</"> --</option>
        <option value="特になし">特になし</option>
        <option value="クリーム">クリーム</option>
        <option value="軟膏">軟膏</option>
        <option value="液">液</option>
        </select>
      </div>
    </>

  );

};

export default DrugForm
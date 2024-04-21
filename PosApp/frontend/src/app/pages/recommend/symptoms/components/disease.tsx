import React,{useState} from "react";
import diseases from "../../../../utils/disease";

const Disease = ()=> {

    // 疾患
    const [selectedDisease, setSelectedDisease] = useState<string>("");
    const generateDiseaseOptions = () => {
      return diseases.map((disease, index) => (
        <option key={index} value={disease}>
          {disease}
        </option>
      ));
    };
    const handleDiseaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selected:any = e.target.value; // 選択されたオプションの値を取得
      setSelectedDisease(selected); // `setSelectedDisease` 関数に渡す
  };

  return (

    <>
      <div className="mt-5">
          <div className="flex justify-start items-center">
            <p className="text-gray-500 mr-2 text-xs">症状</p>
            <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
            </div>
            <select
              id="diseases"
              className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
              value={selectedDisease}
              onChange={handleDiseaseChange}
            >
              {generateDiseaseOptions()}
            </select>
      </div>
    </>

  );

};

export default Disease
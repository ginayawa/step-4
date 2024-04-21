import React, {useState} from "react";
import diseases from "../../../../utils/disease";

const Disease = ()=>{


  // 疾患
  const [selectedDisease, setSelectedDisease] = useState<string[]>([]);
  const generateDiseaseOptions = () => {
    return diseases.map((disease, index) => (
      <option key={index} value={disease}>
        {disease}
      </option>
    ));
  };
  const handleDiseaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selected: string[] = [];

    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            selected.push(options[i].value);
        }
    }
    setSelectedDisease(selected);
  };



  return (
    <>
      <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2">今までにかかったことのある / 治療中の疾患</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p>
          </div>
        </div>
        <option value=""></option>
        <select
          id="diseases"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border rounded-sm text-xs text-gray-500"
          multiple
          value={selectedDisease}
          onChange={handleDiseaseChange}
        >
          {generateDiseaseOptions()}
        </select>
      </div>
    </>
  );

};

export default Disease;
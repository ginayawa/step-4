import React, {useState} from "react";
import prefectures from "../../../../utils/pref";

const Pref = ()=>{

  // 居住地
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const generatePrefectureOptions = () => {
    return prefectures.map((prefecture, index) => (
      <option key={index} value={prefecture}>
        {prefecture}
      </option>
    ));
  };

  return (
    <>
     <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2">居住地</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="prefecture"
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm border rounded-sm text-xs ${
            selectedPrefecture ? "text-black" : "text-gray-400"
          }`}
          value={selectedPrefecture}  // ここで選択した都道府県の状態変数を管理します
          onChange={(e) => setSelectedPrefecture(e.target.value)}
        >
          <option value="">都道府県を選択してください</option>
          {generatePrefectureOptions()}
        </select>
      </div>
    </>
  );
};

export default Pref
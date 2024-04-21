import React, { useState } from "react";

const Sex = ()=> {

  // 性別
  // 初期状態は未選択
  const [gender, setGender] = useState('');
  // 選択された性別を取得する関数
  const handleSelectGender = (genderValue: string) => {
    setGender(genderValue);
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2">性別</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <div className="">
          <div className="flex items-center space-x-8 ml-5 mt-3">
            <div
              className={`h-6 w-6 text-sm rounded-full flex justify-center items-center border-2 shadow-xl cursor-pointer ${
                gender === 'male' ? 'bg-[#fd6da2] border-[#fd6da2] text-white' : 'text-[#fd6da2] border-[#fd6da2]'
              }`}
              onClick={() => handleSelectGender('male')}
            >
              男
            </div>
            <div
              className={`h-6 w-6 text-sm rounded-full flex justify-center items-center border-2 shadow-xl cursor-pointer ${
                gender === 'female' ? 'bg-[#fd6da2] border-[#fd6da2] text-white' : 'text-[#fd6da2] border-[#fd6da2]'
              }`}
              onClick={() => handleSelectGender('female')}
            >
              女
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sex
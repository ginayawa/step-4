import React, { useState } from "react";

const Birth = ()=> {

  // 各フィールドの初期値を設定
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // 年、月、日の選択肢を生成する関数
  const generateOptions = (start:any, end:any) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <>
     <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2">生年月日</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <div className="ml-5 flex justify-start items-end">
          <select
            id="year"
            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-16 shadow-sm border rounded-sm text-xs ${
              year ? "text-black" : "text-gray-400"
            }`}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">西暦</option>
            {generateOptions(1920, 2024)}
          </select>
          <p className="text-sm text-gray-500 ml-2 mr-5">年</p>
          <select
            id="month"
            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-16 shadow-sm border rounded-sm text-xs ${
              month ? "text-black" : "text-gray-400"
            }`}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">月</option>
            {generateOptions(1, 12)}
          </select>
          <p className="text-sm text-gray-500 ml-2 mr-5">月</p>
          <select
            id="day"
            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-16 shadow-sm border rounded-sm text-xs ${
              day ? "text-black" : "text-gray-400"
            }`}
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value="">日</option>
            {generateOptions(1, 31)}
          </select>
          <p className="text-sm text-gray-500 ml-2 mr-5">日</p>
        </div>
      </div>
    </>
  );
};

export default Birth;
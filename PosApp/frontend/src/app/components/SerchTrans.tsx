
import React from "react";
import { fetchTrans } from '../utils/fetchTrans';

interface SearchTransProps {
  trans: {
    total_amt: number;
    date_time: string;
  }[];
}



const SearchTransList: React.FC<SearchTransProps> = ({ trans }) => {
  // 合計金額を計算
  const totalAmt = trans.reduce((acc, searchTrans) => acc + searchTrans.total_amt, 0);
  return (
    <>
      <div className="w-full max-w-md p-4 border-2 border-red-500 rounded my-4 bg-red-50">
      <h2 className="font-bold text-red-700">  セルフメディケーション税制優遇対象製品の購入金額合計:</h2>
        <p className="my-2 font-bold underline">合計：{totalAmt}円</p> 
        {trans.map((searchTrans, index) => (
          <div key={index} >
            <p>✔︎&nbsp;{searchTrans.date_time.substring(0, 10)} : {searchTrans.total_amt}円</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchTransList;
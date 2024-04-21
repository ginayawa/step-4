
import React from "react";

interface SearchTransProps {
  trans: {
    total_amt: number;
    date_time: string;
  }[];
}




const SearchTransList: React.FC<SearchTransProps> = ({ trans }) => {
  // 合計金額を計算
  const totalAmt = trans.reduce((acc, searchTrans) => acc + searchTrans.total_amt, 0);
  // ¥12,000~88,000 >> 合計金額 - 12,000
  const difAmt = totalAmt >= 12000 && totalAmt<=88000 ? totalAmt - 12000: 0;
  return (
    <>
      <div className="w-full max-w-md pt-4  rounded mt-4 ">
        <div className="text-center">
          <h2 className="font-bold text-[rgba(123,97,255)]">セルフメディケーション税制優遇</h2>        
          {/* 合計金額が12000円以上の場合に差分を表示 */}
          {/* 条件に応じて表示を切り替え */}
          {totalAmt <= 12000 && <p className="my-2 font-bold">12000円を超えた金額は控除対象です。</p>}
          {totalAmt <= 12000 && <p className="my-2 font-bold">現在控除対象はありません。</p>}
          {totalAmt > 12000 && totalAmt <= 88000 && (
            <>
              <p className="my-2 font-bold">控除対象金額: <span className="underline">{difAmt}</span> 円</p>
              <p className="my-2 font-bold">残り控除可能額: <span className="underline">{88000 - totalAmt}</span>円</p>
            </>
          )}
          {totalAmt - 12000 > 88000 && <p className="my-2 font-bold"><span className="underline">88000</span>円が控除対象です。</p>}
        <br/>
        <h2 className="font-bold text-[rgba(123,97,255)]">  
          対象製品の購入金額合計:
        </h2>
        <p className="my-2 font-bold underline text-gray-900">{totalAmt}円</p> 
        </div>
        {trans.map((searchTrans, index) => (
          <div key={index} className="text-center">
            <p>✔︎&nbsp;{searchTrans.date_time.substring(0, 10)} : {searchTrans.total_amt}円 {}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchTransList;
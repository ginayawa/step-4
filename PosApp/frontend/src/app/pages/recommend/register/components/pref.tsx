import React, {useState} from "react";

const prefectures = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];


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
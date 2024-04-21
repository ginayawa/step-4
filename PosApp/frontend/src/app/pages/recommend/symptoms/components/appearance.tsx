import React,{useState} from "react";

const Appearance = ()=> {

  // 色と見た目
  const [selectedAppearance, setSelectedAppearance] = useState<string>("");
  const handleAppearanceChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelectedAppearance(selected);
  };



  return (

    <>
      <div className="mt-5">
          <div className="flex justify-start items-center">
            <p className="text-gray-500 mr-2 text-xs">色と見た目</p>
            <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
          </div>
          <select
            id="appearance"
            className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
            value={selectedAppearance}
            onChange={handleAppearanceChange}
          >
          <option value="--</"> --</option>
          <option value="全体に赤い">全体に赤い</option>
          <option value="中心が黒い">中心が黒い</option>
          <option value="中心が白~黄色">中心が白~黄色</option>
          <option value="爛れている">爛れている</option>
          <option value="その他">その他</option>
          </select>
      </div>
    </>

  );

};

export default Appearance
import React,{useState} from "react";

const SecondEffect = ()=> {

  // 期待する効果2番目
  const [selected2ndEffect, setSelected2ndEffect] = useState<string>("");
  const handle2ndEffectChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelected2ndEffect(selected);
  };


  return (

    <>
      <div className="mt-5 ">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">次に期待する効果</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="SecondEffect"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selected2ndEffect}
          onChange={handle2ndEffectChange}
        >
        <option value="--</"> --</option>
        <option value="赤みを抑えたい">赤みを抑えたい</option>
        <option value="殺菌したい">殺菌したい</option>
        <option value="毛穴のつまりを取りたい">毛穴のつまりを取りたい</option>
        <option value="組織修復をしたい">組織修復をしたい</option>
        <option value="薬剤師にお任せ">薬剤師にお任せ</option>
        </select>
      </div>
    </>

  );

};

export default SecondEffect
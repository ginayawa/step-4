import React,{useState} from "react";

const Problem = ()=> {

  // 困っていること
  const [selectedProblem, setSelectedProblem] = useState<string>("");
  const handleProblemChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelectedProblem(selected);
  };

  return (

    <>
      <div className="mt-5 mb-10">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">困っていること</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="problem"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selectedProblem}
          onChange={handleProblemChange}
        >
        <option value="--</"> --</option>
        <option value="特になし">特になし</option>
        <option value="病院を探している">病院を探している</option>
        <option value="どの薬が良いかわからない">どの薬が良いかわからない</option>
        <option value="治らない">治らない</option>
        <option value="薬剤師に相談したい">薬剤師に相談したい</option>
        <option value="薬以外のケアも知りたい">薬以外のケアも知りたい</option>
        <option value="ニキビの状態を記録したい">ニキビの状態を記録したい</option>
        <option value="その他">その他</option>
        </select>
      </div>
    </>

  );

};

export default Problem
import React, {useState} from "react";

const Child = ()=>{

  // 子供について
  // 初期状態は未選択
  const [child, setChild] = useState('');
  // 選択された性別を取得する関数
  const handleSelectChild = (childValue: string) => {
    setChild(childValue);
  };
  
  return(
    <>
    <div className="mt-5 mr-10">
    <div className="flex justify-start items-center">
        <p className="text-gray-500 mr-2">お子様について</p>
        <p className="text-xs text-[#f993b8] ml-1">*無を選択の方</p>
      </div>
      <div className="">
        <div className="flex items-center space-x-4 ml-5 mt-3">
          <div
            className={`h-6 w-24 text-xs rounded-sm flex justify-center items-center border shadow-xl cursor-pointer ${
              child === 'possibility_pregnant' ? 'bg-[#fd6da2] border-[#fd6da2] text-white' : 'text-[#fd6da2] border-[#fd6da2]'
            }`}
            onClick={() => handleSelectChild('possibility_pregnant')}
          >
            妊娠の可能性有
          </div>
          <div
            className={`h-6 w-24 text-xs rounded-sm flex justify-center items-center border shadow-xl cursor-pointer ${
              child === 'breast_feeding' ? 'bg-[#fd6da2] border-[#fd6da2] text-white' : 'text-[#fd6da2] border-[#fd6da2]'
            }`}
            onClick={() => handleSelectChild('breast_feeding')}
          >
            授乳中
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Child;
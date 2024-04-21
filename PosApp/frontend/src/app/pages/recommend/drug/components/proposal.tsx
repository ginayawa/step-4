import React, {useState} from "react";

const Proposal = ()=> {

  return (
    <>
      <div>
        <div className="flex justify-start items-end mt-8">
          <h1 className="text-xl font-bold text-[#D54B7D]">お薬のご提案 &#x1f48a;</h1>
        </div>
        <div className="mt-5">
          <p className="text-xs mb-1 text-gray-600 ml-10">氏名：にんじゃわんこ様</p>
          <div className="flex justify-center">
            <div className="border space-x-2 border-gray-400 shadow-2xl text-2xs text-gray-600 flex justify-center pb-4 w-10/12">
              <div className=" space-y-4 mx-3 w-5/12 mt-2">
                <p className=" border-b mt-3"><span className="text-[#D54B7D]">にんじゃわんこさまの現在の状態</span>は、</p>
                <p className=" border-b">ニキビの「<span className="text-[#D54B7D]">維持期〜急性期</span>」に当たりそうです。</p>
                <p  className=" border-b">痛みがひどくなったり、化膿したり、ご提案のお薬を</p>
                <p  className=" border-b">使用しても繰り返しニキビができるようでしたら、</p>
                <p  className=" border-b">皮膚科受診をお勧めします。</p>
                <p  className=" border-b">ご提案するOTC薬は病院のお薬より効果が弱いので、</p>
                <p  className=" border-b">必ずしも治らないことをご承知おきください。</p>
              </div>
              <div className="space-y-4  w-5/12  mt-2 ">
                <p  className=" border-b mt-3" ><span className="text-[#D54B7D]">にんじゃわんこ様のご要望</span>は、</p>
                <div className="flex">
                  <p className="border-b flex ">１番に期待する効果： 赤みを抑えたい</p>
                    <div className="ml-2 text-2xs bg-[#f16b9c] text-white h-3 w-6 flex items-center justify-center rounded-sm">
                      <p className="text-center">優先</p>
                    </div>
                </div>
                
                <p  className=" border-b">次に期待する効果：　殺菌したい</p>
                <p  className=" border-b">希望の財形：　特になし</p>
                <p  className=" border-b">硫黄のにおい：　気になる</p>
                <p  className=" border-b">　</p>
                <p  className=" border-b">　</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  
  );

};

export default Proposal;
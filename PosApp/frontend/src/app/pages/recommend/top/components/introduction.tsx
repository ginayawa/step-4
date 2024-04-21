import React from "react";
import Image from "next/image";
import img from '../../../../../../public/material1.png'

const Instruction = () => {
  return(
    <>
    <div className="my-10 flex items-between">
        <Image src={img} alt='img3' className="w-1/3"/>
        <div className="  ml-4">
          <h2 className="text-xl font-bold text-[#D54B7D]">Meduet</h2>
          <div className=" mt-6 text-gray-500 text-xs">
            <p>Meduet は気軽に症状や悩みを相談できるあなたの薬剤師です。</p>
            <p>一般用医薬品（OTC医薬品、ドラッグストアで買える薬）を購入したいとき、薬剤師が症状とあなたの要望を聞いて、一番最適なおくすりを提案します。</p>
            <p>ただし、症状がひどい場合は、病院に行くことをお勧めする場合があります。</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruction;
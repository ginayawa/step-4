import React, {useState} from "react";
import Image from "next/image";
import img from '../../../../../../public/pharmacist.jpg'

const Pharmacist = ()=> {

  return (
    <>
      <div>
        <div className="flex justify-start items-end">
          <h1 className="text-xl font-bold text-[#D54B7D]">担当薬剤師 &#x1fa7a;</h1>
        </div>
        <div className="flex justify-start bg-[#fce0eb] h-26 rounded-full mt-3 ">
          <div>
            <Image src={img} alt="" width={100} className="rounded-full"/>
          </div>
          <div className="flex items-center"> 
            <div className=" text-xs text-gray-500 ml-5 space-y-2">
              <p>氏名：　田中　花子</p>
              <p>薬剤師登録番号：　1234567</p>
              <p>一言：　よろしくお願いします！</p>
            </div>
          </div>
        </div>
      </div>
    </>
  
  );

};

export default Pharmacist;
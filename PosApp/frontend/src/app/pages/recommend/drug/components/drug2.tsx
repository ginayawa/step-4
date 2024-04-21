import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import img from '../../../../../../public/drug2.png'

const Drug2 = ()=> {

  return (
    <>
      <div className="my-10">
        <div className=" flex justify-start">
          <div>
            <Image src={img} alt="2" width={250} className="h-full"/>
          </div>
          <div className="bg-[#fce0eb] w-full">
            <div className="mx-5 my-2">
                <h2 className="text-sm text-[#D54B7D] font-bold">次におすすめなお薬</h2>
                <p className="text-xs text-gray-500 mt-1">ペアアクネリキッド治療薬</p>
                <div className="mx-auto text-2xs text-gray-500" style={{maxWidth: '90%'}}>
                    <p className="my-1">有効成分: イププロフェンピコノール3.0g (赤みを抑える)</p>
                    <p className="my-1">　　　　　イソプロプルメチルフェノール0.3g (殺菌作用)</p>
                    <p className="my-1">　　　　　アラントイン0.2ｇ(赤みを抑える、組織修復)</p>
                    <p className="my-1">効能・効果    : ニキビ・吹き出物</p>
                    <p className="my-1">剤型    : ローション</p>
                    <p className="my-1">金額    : 1,480円 (税抜)</p>
                </div>
                {/* 購入ボタン */}
                <div className="">
                  <div className="flex justify-center mt-1">
                    <Link href='http://localhost:3000/pages/purchase'>
                      <button className="bg-[#D54B7D] text-white font-bold text-sm py-1 px-5 rounded-full shadow-lg transition-transform duration-200 active:scale-95 active:shadow-none">購入</button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  
  );

};

export default Drug2;
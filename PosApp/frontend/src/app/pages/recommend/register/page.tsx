'use client'
import React from "react";
import { useEffect,useState } from "react";
import Image from 'next/image';
import Link from "next/link";

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Name from "./components/name";
import Birth from "./components/birth";
import Sex from "./components/sex";
import Pregnant from "./components/pregnant";
import Child from "./components/child";
import Pref from "./components/pref";
import Disease from "./components/disease";
import Allergy from "./components/allergy";


export default function Home(){

  return (
    <main className="mx-auto max-w-xl ">
      {/* ヘッダー */}
      <Header/>

      <div className="bg-gray-100">
        <div className="mx-10 ">
      
          {/* タイトル */}
          <div className="flex justify-start items-end">
            <h1 className="text-xl font-bold text-[#D54B7D]">会員登録</h1>
            <p className="ml-5 mb-1 text-xs text-gray-400">問診 1/3</p>
          </div>

          {/* ニックネーム */}
          <Name/>

          {/* 生年月日 */}
          <Birth/>

          {/* 性別 */}
          <Sex/>

          {/* 女性の選択肢 */}
          <div className="flex justify-between ">

            {/* 妊娠の有無 */}
            <Pregnant/>
            
            {/* お子様について */}
            <Child/>
          </div>
              
          {/* 居住地 */}
          <Pref/>

          {/* 疾患 */}
          <Disease/>
        

          {/* アレルギー */}
          <Allergy/>
         
        </div>

        {/* 始めるボタン */}
        <div className="mt-20 flex justify-center pb-20">
          <Link href='http://localhost:3000/pages/recommend/symptoms'>
            <button className="bg-[#D54B7D] text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg transition-transform duration-200 active:scale-95 active:shadow-none">次の入力へ</button>
          </Link>
        </div>

      </div>

      {/* footer */}
      <Footer/>
    </main>
  );
};

'use client'
import React from "react";
import { useEffect,useState } from "react";
import Image from 'next/image';
import Link from "next/link";

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Disease from "./components/disease";
import Part from "./components/part";
import Time from "./components/time";
import Size from "./components/size";
import Appearance from "./components/appearance";
import Status from "./components/status";
import Problem from "./components/problem";
import FirstEffect from "./components/first_effect";
import SecondEffect from "./components/second_effect";
import DrugForm from "./components/drug_form";
import Priority from "./components/priority";
import Sulfur from "./components/sulfur";


export default function Home(){

  return (
    <main className="mx-auto max-w-xl ">
      {/* ヘッダー */}
      <Header/>

      <div className="bg-gray-100 py-10">

        <div className="mx-10">
          {/* タイトル */}
          <div className="flex justify-start items-end">
            <h1 className="text-xl font-bold text-[#D54B7D]">症状ヒアリング</h1>
            <p className="ml-5 mb-1 text-xs text-gray-400">問診 2/3</p>
          </div>

          {/* 疾患 */}
          <Disease/>

          {/* 部位 */}
          <Part/>

          {/* いつから */}
          <Time/>

          {/* サイズ */}
          <Size/>

          {/* 色と見た目 */}
          <Appearance/>

          {/* 症状 */}
          <Status/>

          {/* 困っていること */}
          <Problem/>
          
          <div className="border-b  border-gray-300"></div>

        </div>


        <div className="mx-10 my-5">
          {/* タイトル */}
          <div className="flex justify-start items-end">
            <h1 className="text-xl font-bold text-[#D54B7D]">提案のご希望</h1>
            <p className="ml-5 mb-1 text-xs text-gray-400">問診 3/3</p>
          </div>

          {/* 最も期待する効果 */}
          <FirstEffect/>

          {/* 次に期待する効果 */}
          <SecondEffect/>

          {/* 希望の財形 */}
          <DrugForm/>

          {/* 優先事項 */}
          <Priority/>

          {/* 硫黄の匂い */}
          <Sulfur/>
          
        </div>

        {/* 始めるボタン */}
        <div className="mt-20 pb-20">
          <div className="text-center">
            <p className="text-sm text-[#D54B7D]">入力お疲れ様でした。</p>
            <p className="text-sm text-[#D54B7D]">Meduetがあなたにおすすめなお薬を提案します。</p>
          </div>
          <div className="flex justify-center mt-3">
            <Link href='http://localhost:3000/pages/recommend/drug'>
              <button className="bg-[#D54B7D] text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg transition-transform duration-200 active:scale-95 active:shadow-none">お薬をみる</button>
            </Link>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </main>
  );
};

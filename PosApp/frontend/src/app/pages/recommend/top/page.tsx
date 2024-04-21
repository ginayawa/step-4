'use client'
import React from "react";
import { useEffect,useState } from "react";
import Image from 'next/image';
import Link from "next/link";

import img2 from '../../../../../public/main.png';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import News from "./components/news";
import Instruction from './components/introduction';
import Points from "./components/points";



export default function Home(){


  return (
    <main className="mx-auto max-w-xl">
      {/* ヘッダー */}
      <Header/>

      {/* メイン */}
      <div className="mt-4">
        <Image src={img2} alt='main' className="object-cover "/>
      </div>
      
      {/* ニュース */}
      <News/>

      {/* Meduet紹介 */}
      <Instruction/>

      {/* 3つのポイント */}
      <Points/>

      {/* 始めるボタン */}
      <div className="my-20 flex justify-center">
        <Link href='http://localhost:3000/pages/recommend/register'>
          <button className="bg-[#D54B7D] text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg transition-transform duration-200 active:scale-95 active:shadow-none">はじめる</button>
        </Link>
      </div>

      {/* footer */}
      <Footer/>
    </main>
  );
};

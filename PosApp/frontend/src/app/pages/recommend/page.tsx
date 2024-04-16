'use client'
import React from "react";
import { useEffect,useState } from "react";
import Image from 'next/image'
import img1 from './images/logo.png' 
import img2 from './images/main.png'
import img3 from './images/material1.png'




export default function Home(){


  return (
    <main >
      {/* ヘッダー */}
      <header className="md:flex justify-between">
        <div className="ml-5">
          <Image src={img1} alt='logo' width={100}/>
        </div>
        <div className="md:flex items-center">
          <div className="">
            <div className=" flex justify-end">
              <ul className="grid grid-cols-4 mb-5 text-gray-600 divide-x divide-gray-600 space-x-2 text-sm">
                <li className="text-center">パートナーリングをお考えのお客様</li>
                <li className="text-center">患者さん・ご家族の皆様</li>
                <li className="text-center">医療従事者の皆様</li>
                <li className="text-center">採用情報</li>
              </ul>
            </div>
            <ul className="grid grid-cols-4  text-2xl text-red-500 space-x-5 ">
              <li>Meduetについて</li>
              <li>取り組みについて</li>
              <li>サステナビリティ</li>
              <li className="flex items-center">
                ニュース
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>

              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* メイン */}
      <div >
        <Image src={img2} alt='main' className="object-cover w-full"/>
      </div>
      
      {/* ニュース */}
      <div className="bg-gray-100 py-10 ">
        <h1 className="text-center text-5xl text-red-500 font-bold mb-10">ニュース</h1>
        <div className="flex justify-center">
          <div className="bg-white flex justify-center w-2/3">
            <div className="flex flex-col my-10  text-2xl text-gray-500">
              <ul>
                <li className="border-b-2">
                    <div className=" flex justify-start space-x-20 px-5">
                      <div>2024/4/1</div> <div>Tech0 Step4 最終発表</div>
                    </div>
                </li>
                <li className="border-b-2 mt-5">
                    <div className=" flex justify-start space-x-20 px-5">
                      <div>2024/3/1</div> <div>7期生の募集について</div>
                    </div>
                </li>
                <li className="border-b-2 mt-5">
                    <div className=" flex justify-start space-x-20 px-5">
                      <div>2024/1/1</div> <div>オフラインイベントのお知らせ</div>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Meduet紹介 */}
      <div className="my-10 flex items-center">
        <Image src={img3} alt='img3' className="w-1/2"/>
        <div className="mx-10 w-7/12">
          <h2 className="text-5xl font-bold text-red-500">Meduet</h2>
          <div className="mr-20 mt-6 text-gray-500 text-2xl">
            <p>Meduet は気軽に症状や悩みを相談できるあなたの薬剤師です。</p>
            <p>一般用医薬品（OTC医薬品、ドラッグストアで買える薬）を購入したいとき、薬剤師が症状とあなたの要望を聞いて、一番最適なおくすりを提案します。</p>
            <p>ただし、症状がひどい場合は、病院に行くことをお勧めする場合があります。</p>
          </div>
        </div>
      </div>

      {/* 3つのポイント */}
      <div className=" flex justify-center mx-20">
        <div>
          <h2 className="text-5xl font-bold text-red-500 mt-20 mb-20">3つのポイント</h2>
          <div className=" my-10  flex justify-between">
            <div className="w-1/4">
              <div className="flex justify-center">
                <div className="text-red-400 border-4 border-red-400 rounded-full w-36 h-36 flex items-center justify-center mb-5 shadow-lg">
                  <div className="text-center text-2xl">
                    <p>Point1</p>
                    <p className="font-bold ">提案</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-700 text-xl">
                <p>10000種類のお薬の中から、あなたの症状と要望に一番近いお薬を提案</p>
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex justify-center">
                <div className="text-red-400 border-4 border-red-400 rounded-full w-36 h-36 flex items-center justify-center mb-5 shadow-lg">
                  <div className="text-center text-2xl">
                    <p>Point2</p>
                    <p className="font-bold ">公平</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-700 text-xl">
                <p>薬剤師の観点で、公平にお薬を選びます</p>
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex justify-center">
                <div className="text-red-400 border-4 border-red-400 rounded-full w-36 h-36 flex items-center justify-center mb-5 shadow-lg">
                  <div className="text-center text-2xl">
                    <p>Point3</p>
                    <p className="font-bold ">無料</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-700 text-xl">
                <p>お薬の提案までは無料です</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 始めるボタン */}
      <div className="mt-10 flex justify-center">
        <button className="bg-red-400 text-white font-bold text-3xl py-3 px-10 rounded-full">はじめる</button>
      </div>

      {/* footer */}
      <footer className="bg-red-500 mt-20  text-white flex justify-center">
        <div className="flex justify-center w-2/3 space-x-10">
          <div>
            <div className="font-bold text-xl">運営会社</div>
            <div>
              <ul>
              <li>会社概要</li>
              <li>Mesuetについて</li>
              <li>沿革</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">運営会社</div>
            <div>
              <ul>
              <li>会社概要</li>
              <li>Mesuetについて</li>
              <li>沿革</li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
};

'use client'
import React from "react";
import { useEffect,useState } from "react";
import Image from 'next/image';
import Link from "next/link";

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Pharmacist from "./components/pharmacist";
import Proposal from "./components/proposal";
import Drug1 from "./components/drug1";
import Drug2 from "./components/drug2";

export default function Home(){

  return (
    <main className="mx-auto max-w-xl ">
      {/* ヘッダー */}
      <Header/>

      <div className="py-10">

        <div className="mx-10">
          {/* 担当薬剤師 */}
          <Pharmacist/>

          {/* お薬のご提案 */}
          <Proposal/>

          {/* お薬提案 */}
          {/* １剤目 */}
          <Drug1/>

          {/* ２剤目 */}
          <Drug2/>

        </div>

      </div>

      {/* footer */}
      <Footer/>
    </main>
  );
};

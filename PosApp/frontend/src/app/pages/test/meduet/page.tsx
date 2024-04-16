'use client'
import { useState } from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'
import Cart from '../poblic/images/CartShopping.png';
import DrugsSample from '../poblic/images/DrugsSample.png'; 

export default function Home() {
    const [isScanning, setIsScanning] = useState(false); 
    const [isCartOpen, setIsCartOpen] = useState(false); 

    const handleScanStart = () => {
        setIsScanning(true);
    };

    const handleScanStop = () => {
        setIsScanning(false);
    };

    const handleCartOpen = () => {
        setIsCartOpen(true);
    };

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    return (
        <div className="mx-auto max-w-xl">
            <Header/>
            <div className="my-8">
                <div className="flex justify-center items-center my-2">
                    <h1 className="text-3xl font-bold text-[#D54B7D]">選択したお薬</h1>
                </div>
                <div className="flex justify-center items-center">    
                    <Image src={DrugsSample} alt="DrugsSample"  width={250} height={250} />
                </div>
                <div className="bg-[rgba(255,203,188,0.23)] mx-auto my-6 p-4" style={{maxWidth: '80%'}}>
                    <h3 className="text-1xl font-bold my-2 text-center">メンソレータムアクネス25メディカルクリームc</h3> 
                    <div className="mx-auto my-6" style={{maxWidth: '90%'}}>
                        <p className="text-sm my-1">有効成分: イププロフェンピコノール3.0g (赤みを抑える)</p>
                        <p className="text-sm my-1">イソプロプルメチルフェノール1.0g (殺菌作用)</p>
                        <p className="text-xs text-right mr-5">※100g中</p> 
                        <p className="text-sm my-1">製造販売者: ロート製薬株式会社</p>
                        <p className="text-sm my-1">剤型    : クリーム</p>
                        <p className="text-sm my-1">金額    : 1,200円 (税抜)</p>
                        <p className="text-sm my-1">セルフメディケーション税制優遇: 1</p> 
                    </div>

                    <button className="mx-auto block bg-[#FF95BC] text-white rounded-full py-2 px-4 my-2">カートに入れる</button> 
                </div>
                <div className="flex flex-col justify-center items-center my-10"> 
                    <p className="text-base mb-2">バーコード読み取りで商品追加する場合はこちら</p> 
                    <button onClick={handleScanStart} className="mx-auto block bg-[rgba(123,97,255,0.61)] text-white rounded-full py-2 px-4 my-6">スキャン開始</button> 
                    {isScanning && ( 
                        <div>
                            <div className="flex items-center my-2"> 
                                <p>商品コード：</p>
                                <form className="border border-gray-300 ml-2 p-1">111122223333</form> 
                            </div>
                            <button onClick={handleScanStop} className="mx-auto block bg-[rgba(123,97,255,0.61)] text-white rounded-full py-2 px-4 my-8">スキャン停止</button> 
                        </div>
                    )}
                </div>
                <button onClick={handleCartOpen} className="flex flex-col items-center justify-center bg-[rgba(255,203,188,0.23)] mx-auto my-2 p-2 text-[#FF95BC] rounded-md" > 
                    <Image src={Cart} alt="Cart" width={70} height={70} /> 
                    <span className="mt-2 text-xs">カートを確認する</span> 
                </button>

                {isCartOpen && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 text-center"> 
            <h2 className="text-2xl font-bold mb-4 uppercase text-[#D54B7D]">カートの中身</h2>
            <div className="my-8">
                <p className="mb-1">メンソレータムアクネス25メディカルクリームc  x1  1,200円</p>
                <p className="mb-1 text-right">税抜 1,200円</p>
                <p className="mb-1 text-right">合計 1,320円</p>
            </div>
            <div className="flex items-center justify-between space-x-2"> {/* justify-between を追加 */}
                <div className="flex items-center"> 
                    <input type="checkbox"/> 
                    <label className="ml-2">明細書をPDF保存する</label> 
                </div>
                <button onClick={handleCartClose} className="block bg-[#FF95BC] text-white rounded-full py-2 px-4">購入する</button>
            </div>
        </div>
    </div>
)}
            </div>
            <Footer/>
        </div>
    );
}
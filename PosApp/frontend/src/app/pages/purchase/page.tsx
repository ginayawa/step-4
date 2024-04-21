'use client'
import { useState } from 'react'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image'
import CartImg from '../../../../public/CartShopping.png';
import DrugsSample from '../../../../public/DrugsSample.png'; 

import RecommendedDrug from './components/recommendedDrug';
import Scan from './components/scan';
import Cart from './components/cart';
import SearchTrans from './components/search_trans';

import { fetchItem } from "../../utils/fetchItem";
import ItemDetails from '../../components/ItemDetails';
import { handlePurchase } from "../../utils/purchaseApi";
import SearchTransList from '../../components/SearchTrans';
import { fetchTrans } from '../../utils/fetchTrans';

export default function Home() {
    const [isScanning, setIsScanning] = useState(false); 
    const [isCartOpen, setIsCartOpen] = useState(false); 
    const [isItemDetails, setIsItemDetails] = useState(false); 
    const [isSearchTranList, setIsSearchTranList] = useState(false); 
    const [AlertPopup, setAlertPopup] = useState(false);
    const [alertProductName, setAlertProductName] = useState('');


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


    const [prdCd, setPrdCd] = useState<string>('4987241148820');
    const [item, setItem] = useState<any>();
    // Item検索
    const handleFetchItem = async () => {
        const data = await fetchItem(prdCd);
        if (data) {
        setItem(data);
        console.log(data)
        }
    };
    // item追加
    const [items, setItems] = useState<any[]>([]);
    const [addedItemPopup, setAddedItemPopup] = useState<any>(null); // 追加
    const addItem = () => {
        if (item) {
            if (item.prd_cd === '4987300032008') {
                setAlertProductName(item.prd_name);
                setAlertPopup(true);
            } else {
                setItems([...items, item]);
                setAddedItemPopup(item); // 追加
                console.log('Item set to:', item)
            }
        }
    };
    const itemsToShow = items || [];
    // 購入
    const handlePurchaseClick = () => {
        handlePurchase(items);
        console.log('buy items', items)
    };
    const [trans, setTrans] = useState<any[]>([]);
    // 取引検索
    const handleFetchTrans = async () => {
        const data = await fetchTrans(4);
        if (data) {
        setTrans(data);
        }
        console.log('trans',trans)
        // console.log(typeof(trans[0]['date_time']))
    };



    // 合計金額を計算
    const totalAmount = itemsToShow.reduce((total, item) => total + item.prd_price, 0);

    


    
    return (
        <div className="mx-auto max-w-xl">
            <Header/>

            <div className="my-8">
                <div className="flex justify-center items-center my-2">
                    <h1 className="text-3xl font-bold text-[#D54B7D]">選択したお薬</h1>
                </div>
                <div className="flex justify-center items-center">    
                    <Image src={DrugsSample} alt="DrugsSample"   height={250} />
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

                    <button className="mx-auto block bg-[#FF95BC] text-white rounded-full py-2 px-4 my-2" 
                        onClick={() => {
                            console.log('Button clicked'); 
                            setPrdCd('4987241148820'); 
                            handleFetchItem();
                            console.log(item)
                            addItem();
                        }}
                    >カートに入れる</button> 
                    {addedItemPopup && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg p-8 text-center">
                                <h2 className="text-2xl font-bold mb-4 uppercase text-[#FF95BC]">追加された商品</h2>
                                <p>{addedItemPopup.prd_name} :  {addedItemPopup.prd_price}円</p>
                                <button onClick={() => setAddedItemPopup(null)} className="block bg-[#FF95BC] text-white rounded-full py-2 px-4 mt-4">閉じる</button>
                            </div>
                        </div>
                    )}

                </div>
                <div className="flex flex-col justify-center items-center my-10"> 
                    <p className="text-base mb-2">バーコード読み取りで商品追加する場合はこちら</p> 
                    <button onClick={handleScanStart} className="mx-auto block bg-[rgba(123,97,255,0.61)] text-white rounded-full py-2 px-4 my-6">スキャン開始</button> 
                    {isScanning && ( 
                        <div>
                            <div className="flex items-center my-2"> 
                                <p>商品コード</p>
                                <select name="" id="" value={prdCd} onChange={(e) => setPrdCd(e.target.value)}>
                                <option value=""></option>
                                <option value="4981736222712">4981736222712</option>
                                <option value="4987300032008">4987300032008</option>
                                </select>
                            </div>
                            <div className='flex justify-center'>
                                <button  
                                    className=" text-gray-600 font-bold py-2 px-4 rounded-full mt-4 bg-gray-100"
                                    onClick={()=>{
                                        handleFetchItem();
                                        setIsItemDetails(true);
                                    }}
                                >
                                    検索
                                </button>
                            </div>
                            {isItemDetails &&(<ItemDetails item={item} /> )}
                            <button className="mx-auto block bg-[rgba(123,97,255,0.83)] text-white rounded py-2 px-4 my-2" onClick={addItem}>カートに入れる</button> 
                            {addedItemPopup && (
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg p-8 text-center">
                                        <h2 className="text-2xl font-bold mb-4 uppercase text-[rgb(123,97,255)]">追加された商品</h2>
                                        <p>{addedItemPopup.prd_name} :  {addedItemPopup.prd_price}円</p>
                                        <button onClick={() => setAddedItemPopup(null)} className="block bg-[rgba(123,97,255,0.44)] text-white rounded-full py-2 px-4 mt-4">閉じる</button>
                                    </div>
                                </div>
                            )}
                            {AlertPopup && (
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg p-8 text-center">
                                        <h2 className="text-2xl font-bold mb-4 uppercase text-red-600">禁忌のため購入できません</h2>
                                        <p>あなたが罹患されている疾患の患者さんは<span className='font-bold text-red-600'>{alertProductName}</span>は服用できません</p>
                                        <button onClick={() => setAlertPopup(false)} className="block bg-red-200 text-white rounded-full py-2 px-4 mt-4">閉じる</button>
                                    </div>
                                </div>
                            )}
                            <button onClick={handleScanStop} className="mx-auto block bg-[rgba(123,97,255,0.61)] text-white rounded-full py-2 px-4 my-8">スキャン停止</button> 
                        </div>
                    )}
                </div>
                <button onClick={handleCartOpen} className="flex flex-col items-center justify-center bg-[rgba(255,203,188,0.23)] mx-auto my-2 p-2 text-[#FF95BC] rounded-md" > 
                    <Image src={CartImg} alt="Cart"  height={70} /> 
                    <span className="mt-2 text-xs">カートを確認する</span> 
                </button>

                {isCartOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 text-center"> 
                            <h2 className="text-2xl font-bold mb-4 uppercase text-[#D54B7D]">カートの中身</h2>
                            <div className="my-8">
                                {itemsToShow.length === 0 ? (
                                    <p>購入商品はありません</p>
                                    ) : (
                                    itemsToShow.map((addedItem, index) => (
                                        <div key={index}>
                                            <p>
                                                ✔︎ {addedItem.prd_name} x {addedItem.prd_price}円
                                            </p>
                                        </div>
                                    ))
                                )}
                                <div className="mb-4">合計金額: {totalAmount}円</div>
                            </div>
                            <div className="flex items-center justify-between space-x-2"> {/* justify-between を追加 */}
                                <div className="flex items-center"> 
                                    <input type="checkbox"/> 
                                    <label className="ml-2">明細書をPDF保存する</label> 
                                </div>
                                <button 
                                    onClick={() => {
                                        handlePurchaseClick();
                                        handleCartClose();
                                    }} 
                                    className="block bg-[#FF95BC] text-white rounded-full py-2 px-4">購入する</button>
                            </div>
                            <div className='flex justify-center mt-10'>
                                <button 
                                        onClick={() => {
                                            handleCartClose();
                                        }} 
                                        className="block bg-[#afacad] text-white  py-2 px-4">閉じる</button>
                            </div>
                        </div>
                    </div>
                )}
                <button 
                    onClick={()=>{
                        handleFetchTrans();
                        setIsSearchTranList(true);
                    }} 
                    className="flex flex-col items-center justify-center bg-[#c8b7ef50] mx-auto my-10 p-2 text-[#b595ff] rounded-md" > 
                    {/* <Image src={Cart} alt="Cart" width={70} height={70} />  */}
                    <span className="mt-2 text-xs">購入履歴を検索</span> 
                </button>
                {isSearchTranList && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className='w-2/3 bg-[rgb(254,254,255)] pb-10 rounded'>
                            <div className='flex justify-center'>
                                <SearchTransList trans={trans} />
                            </div>
                            <div>
                            <button 
                                onClick={()=>{setIsSearchTranList(false)}}
                                className="mx-auto block bg-[rgba(123,97,255,0.61)] text-white rounded-full py-2 px-4 my-8">閉じる</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}
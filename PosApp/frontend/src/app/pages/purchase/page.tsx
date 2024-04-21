'use client'
import { useState } from 'react'; 

import CartImg from '../../../../public/CartShopping.png';

import RecommendedDrug from './components/recommendedDrug';
import BarcodeScanner from './components/barcode_scanner';
import CartModal from './components/cart_modal';
import SearchHistoryModal from './components/search_history_modal';

import { fetchItem } from "./utils/fetchItem";
import { handlePurchase } from "./utils/purchaseApi";
import { fetchTrans } from './utils/fetchTrans';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchTransList from './components/SearchTrans';

export default function Home() {
    const [isScanning, setIsScanning] = useState(false); 
    const [isCartOpen, setIsCartOpen] = useState(false); 
    const [isItemDetails, setIsItemDetails] = useState(false); 
    const [isSearchTranList, setIsSearchTranList] = useState(false); 
    const [AlertPopup, setAlertPopup] = useState(false);
    const [alertProductName, setAlertProductName] = useState('');
    const [prdCd, setPrdCd] = useState<string>('4987241148820');
    const [item, setItem] = useState<any>();
    const [items, setItems] = useState<any[]>([]);
    const [addedItemPopup, setAddedItemPopup] = useState<any>(null); 
    const itemsToShow = items || [];


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


    // Item検索
    const handleFetchItem = async () => {
        const data = await fetchItem(prdCd);
        if (data) {
        setItem(data);
        console.log(data)
        }
    };

    // item追加
    const addItem = () => {
    if (item) {
        if (item.prd_cd === '4987300032008') {
            // アラート表示のために item のプロパティを設定
            setAlertProductName(item.prd_name);
            setAlertPopup(true);
        } else {
            // アイテムを items 配列に追加
            setItems(prevItems => [...prevItems, item]);
            
            // `addedItemPopup` に追加されたアイテムを設定
            setAddedItemPopup(item);
            
            // ログ出力
            console.log('Item added to cart:', item);
        }
    }
};

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
                
                <RecommendedDrug 
                    setPrdCd={setPrdCd}
                    handleFetchItem={handleFetchItem}
                    addItem={addItem}
                    addedItemPopup={addedItemPopup}
                    setAddedItemPopup={setAddedItemPopup}
                    item={item}
                />

                <BarcodeScanner 
                    isScanning={isScanning}
                    isItemDetails={isItemDetails}
                    handleScanStart={handleScanStart}
                    handleScanStop={handleScanStop}
                    prdCd={prdCd}
                    setPrdCd={setPrdCd}
                    handleFetchItem={handleFetchItem}
                    setIsItemDetails={setIsItemDetails}
                    item={item}
                    addItem={addItem}
                    addedItemPopup={addedItemPopup}
                    setAddedItemPopup={setAddedItemPopup}
                    AlertPopup={AlertPopup}
                    setAlertPopup={setAlertPopup}
                    alertProductName={alertProductName}
                />

                <CartModal
                    handleCartOpen={handleCartOpen}
                    isCartOpen={isCartOpen}
                    handleCartClose={handleCartClose}
                    itemsToShow={itemsToShow}
                    totalAmount={totalAmount}
                    handlePurchaseClick={handlePurchaseClick}
                    CartImg={CartImg}
                />
                
                <SearchHistoryModal
                    handleFetchTrans={handleFetchTrans}
                    setIsSearchTranList={setIsSearchTranList}
                    isSearchTranList={isSearchTranList}
                    trans={trans}
                    SearchTransList={SearchTransList}
                />
                
                
            </div>
            <Footer/>
        </div>
    );
}   
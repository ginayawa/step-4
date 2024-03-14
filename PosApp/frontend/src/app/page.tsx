'use client'
import React from "react";
import { useEffect,useState } from "react";
import ItemDetails from './components/ItemDetails';
import AddedItemsList from "./components/AddedItemList";
import { fetchItem } from "./utils/fetchItem";
import { handlePurchase } from "./utils/purchaseApi";
import TitleBar from "./components/TitleBar";



export default function Home(){

  const [prdCd, setPrdCd] = useState<string>('4981736222712');
  const [item, setItem] = useState<any>();
  const [items, setItems] = useState<any[]>([]);


  // Item検索
  const handleFetchItem = async () => {
    const data = await fetchItem(prdCd);
    if (data) {
      setItem(data);
    }
  };

  // item追加
  const addItem = () => {
    if (item) {
      setItems([...items, item]);
    }
  };

  // 購入
  const handlePurchaseClick = () => {
    handlePurchase(items);
  };


    

  return (
    <main >
      <TitleBar/>
      <div className="flex flex-col items-center justify-start min-h-screen bg-white">
        <div className="flex items-center border-b border-blue-500 py-2">
          <label className="text-green-700 font-bold">
            Product Cd:
            <input 
              type="text"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={prdCd}
              onChange={(e) => setPrdCd(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <button  
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
            onClick={handleFetchItem}
          >
            Search Item
          </button>
          <ItemDetails item={item} /> 
        </div>
      <div>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
         onClick={addItem}>Add</button>
      </div>

      <div>
        <AddedItemsList items={items}/>
        <div>
          <button 
          className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4'
          onClick={handlePurchaseClick}>Purchase</button>
        </div>
      </div>
      </div>

    </main>
  );
};

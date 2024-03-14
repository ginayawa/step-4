'use client'
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import BarcodeInput from './components/BarcodeInput';
import OutputArea from './components/OutputArea';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { IDtype, Producttype } from './type';
import InputArea  from './components/InputAria';

export default function Home() {
  const [productid, setProductid] = useState<IDtype | null>(null);
  const [barcode, setBarcode] = useState('');
  const [cartItems, setCartItems] = useState<Producttype[]>([]); // cartItemsの状態を追加
  const message: string = "welcome"
  const [searchCode, setSearchCode] = useState<string>("");

  const handleProductChange = (newProductId: string) => {
    const newProduct: IDtype = {
      PRD_ID: newProductId
    };
    setProductid(newProduct);
    // 仮のデータを設定
    const cartProductData: Producttype = { PRD_NAME: "商品名", PRD_PRICE: "価格" };
    // setCartProduct(cartProductData); この行は削除
    setCartItems(prevItems => [...prevItems, cartProductData]); // cartItemsに商品を追加
  };

  

  return (
    <>
      <TitleBar/>
      <div className="flex justify-center items-center my-10">
        <h1 className="text-4xl font-bold">{message}</h1>
      </div>
      <BarcodeInput onProductChange={handleProductChange} barcodeValue={barcode}/>

      
      <p className="text-center my-2">OR</p>

      <InputArea onProductChange={handleProductChange}/>

      <OutputArea productid={productid}/>
      {/* <Cart cartItems={cartItems} setCartItems={setCartItems} /> CartコンポーネントにcartItemsとsetCartItemsを渡す */}
      <Checkout cartItems={cartItems} /> {/* CheckoutコンポーネントにcartItemsを渡す */}
    </>
  );
}

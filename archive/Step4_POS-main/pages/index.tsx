'use client'
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import BarcodeInput from './components/BarcodeInput';
import OutputArea from './components/OutputAria';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import { IDtype, Producttype } from './type';

export default function Home() {
  const [productid, setProductid] = useState<IDtype | null>(null);
  const [barcode, setBarcode] = useState('');
  const [cartItems, setCartItems] = useState<Producttype[]>([]); // cartItemsの状態を追加
  const message: string = "welcome"

  const handleProductChange = (newProductId: string) => {
    // const newProduct: IDtype = {
    //   PRD_ID: newProductId
    setBarcode(newProductId); // スキャンされたバーコード値を設定
    handleSearchClick(); // 商品検索を行う
  

    // setProductid(newProduct);
    // 仮のデータを設定
    const cartProductData: Producttype = {
      PRD_ID: 1, // Add an appropriate ID
      PRD_CD: "placeholderCode", // Add an appropriate code
      PRD_NAME: "商品名",
      PRD_PRICE: 100
    };
    setCartItems(prevItems => [...prevItems, cartProductData]); // cartItemsに商品を追加
  };

  const handleSearchClick = async () => {
    const endpoint = 'http://localhost:8000/search_product/';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: barcode }), // 入力されたバーコード値をリクエストボディに設定
      });
      const data = await response.json();
      console.log(data); // レスポンスの内容をコンソールに出力して確認

      if (data.status === 'success' && typeof data.message !== 'string') {
        // 成功した場合、商品情報を`setProductid`を使って状態に設定
        // `data.message` が `Producttype` オブジェクトであることを確認
        setProductid(data.message as Producttype);
      } else {
        // 商品が見つからない場合の処理
        console.error('Product not found');
        setProductid(null); // 商品が見つからない場合はnullをセット
      }
    } catch (error) {
      console.error('Error searching product:', error);
      setProductid(null); // エラーが発生した場合はnullをセット
    }
  };

  return (
    <>
      <TitleBar/>
      <div className="flex justify-center items-center my-10">
        <h1 className="text-4xl font-bold">{message}</h1>
      </div>
      <BarcodeInput onProductChange={handleProductChange} barcodeValue={barcode}/>
      {/* ORテキスト */}
      <p className="text-center my-2">OR</p>

    {/* コード入力エリア */}
    <div className="flex items-center border-b border-blue-500 py-2">
      <input
        type="text"
        value={barcode}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        onChange={(e) => setBarcode(e.target.value)}
        placeholder="コードを入力"
      />
    </div>

    {/* 検索ボタン */}
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
      onClick={handleSearchClick} // 修正: `handleProductChange`から`handleSearchClick`に変更
    >
      検索
    </button>
      <OutputArea productid={productid}/>
      {/* <Cart cartItems={cartItems} setCartItems={setCartItems} /> CartコンポーネントにcartItemsとsetCartItemsを渡す */}
      <CheckOut cartItems={cartItems} /> {/* CheckoutコンポーネントにcartItemsを渡す */}
    </>
  );
}
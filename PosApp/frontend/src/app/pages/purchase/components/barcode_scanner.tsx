import React from 'react';
import ItemDetails from './ItemDetails';


// プロパティの型定義
interface BarcodeScannerProps {
  isScanning: boolean;
  isItemDetails: boolean;
  handleScanStart: () => void;
  handleScanStop: () => void;
  prdCd: string;
  setPrdCd: (value: string) => void;
  handleFetchItem: () => void;
  setIsItemDetails: (value: boolean) => void;
  item: any;
  addItem: () => void;
  addedItemPopup: any;
  setAddedItemPopup: (value: any) => void;
  AlertPopup: boolean;
  setAlertPopup: (value: boolean) => void;
  alertProductName: string;
}


// BarcodeScanner コンポーネント
const BarcodeScanner: React.FC<BarcodeScannerProps> = ({
  isScanning,
  isItemDetails,
  handleScanStart,
  handleScanStop,
  prdCd,
  setPrdCd,
  handleFetchItem,
  setIsItemDetails,
  item,
  addItem,
  addedItemPopup,
  setAddedItemPopup,
  AlertPopup,
  setAlertPopup,
  alertProductName,
}) => (
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
                        className="text-gray-600 font-bold py-2 px-4 rounded-full mt-4 bg-gray-100"
                        onClick={()=>{
                            handleFetchItem();
                            setIsItemDetails(true);
                        }}
                    >
                        検索
                    </button>
                </div>
                {isItemDetails && (<ItemDetails item={item} />)}
                <button className="mx-auto block bg-[rgba(123,97,255,0.83)] text-white rounded py-2 px-4 my-2" onClick={addItem}>カートに入れる</button>
                {addedItemPopup && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4 uppercase text-[rgb(123,97,255)]">追加された商品</h2>
                            <p>{addedItemPopup.prd_name} : {addedItemPopup.prd_price}円</p>
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
);

export default BarcodeScanner;

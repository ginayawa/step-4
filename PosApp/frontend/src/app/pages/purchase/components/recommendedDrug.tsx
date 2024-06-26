import React from 'react';
import Image from 'next/image';
import DrugsSample from '../../../../../public/DrugsSample.png';

interface RecommendedDrugProps {
    setPrdCd: React.Dispatch<React.SetStateAction<string>>;
    handleFetchItem: () => void;
    addItem: () => void;
    addedItemPopup: any; // addedItemPopupの型が不明な場合は'any'で宣言できます。
    setAddedItemPopup: React.Dispatch<React.SetStateAction<any>>;
    item: any; // itemの型が不明な場合は'any'で宣言できます。
}


function RecommendedDrug(props: RecommendedDrugProps) {
    const {
        setPrdCd,
        handleFetchItem,
        addItem,
        addedItemPopup,
        setAddedItemPopup,
        item
    } = props;
    return (
        <div>
            <div className="flex justify-center items-center my-2">
                <h1 className="text-3xl font-bold text-[#D54B7D]">選択したお薬</h1>
            </div>
            <div className="flex justify-center items-center">    
                <Image src={DrugsSample} alt="DrugsSample" height={250} />
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
                        addItem();
                        console.log(item);
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
        </div>
    );
}

export default RecommendedDrug;

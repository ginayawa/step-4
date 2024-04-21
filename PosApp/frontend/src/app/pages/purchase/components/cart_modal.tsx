import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// CartModalProps インターフェース
interface CartModalProps {
  handleCartOpen: () => void;
  isCartOpen: boolean;
  handleCartClose: () => void;
  itemsToShow: Array<{
      prd_name: string;
      prd_price: number;
  }>;
  totalAmount: number;
  handlePurchaseClick: () => void;
  CartImg: StaticImageData; // CartImg の型を調整（string や Image コンポーネントなど）
}


// CartModal コンポーネント
const CartModal: React.FC<CartModalProps> = ({
    handleCartOpen,
    isCartOpen,
    handleCartClose,
    itemsToShow,
    totalAmount,
    handlePurchaseClick,
    CartImg,
}) => (
    <div>
        <button onClick={handleCartOpen} className="flex flex-col items-center justify-center bg-[rgba(255,203,188,0.23)] mx-auto my-2 p-2 text-[#FF95BC] rounded-md">
            <Image src={CartImg} alt="Cart" height={70} />
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
                                    <p>✔︎ {addedItem.prd_name} x {addedItem.prd_price}円</p>
                                </div>
                            ))
                        )}
                        <div className="mb-4">合計金額: {totalAmount}円</div>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <label className="ml-2">明細書をPDF保存する</label>
                        </div>
                        <button onClick={() => {
                            handlePurchaseClick();
                            handleCartClose();
                        }} className="block bg-[#FF95BC] text-white rounded-full py-2 px-4">
                            購入する
                        </button>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <button onClick={handleCartClose} className="block bg-[#afacad] text-white py-2 px-4">
                            閉じる
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default CartModal;

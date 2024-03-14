import React from 'react';
import { Producttype } from '../type';
import Cart from './Cart'; 

type CheckoutProps = {
  cartItems: Producttype[];
};

const Checkout: React.FC<CheckoutProps> = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.PRD_PRICE, 10);
      return !isNaN(price) ? total + price : total;
    }, 0);

  };


  return (
    <div className="flex flex-col items-center mt-4">
      <button
        onClick={() => alert(`合計金額: ${calculateTotal()}円 `)}
        className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
      >
        購入
      </button>
    </div>
  );
};

export default Checkout;

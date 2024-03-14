import React, { useState } from 'react';
import { Producttype } from '../type';

type CartProps = {
  product?: Producttype;
};

const Cart: React.FC<CartProps> = ({ product }) => {
  const [cartItems, setCartItems] = useState<Producttype[]>([]);

  const addToCart = () => {
    if (product) {
      setCartItems(prevItems => [...prevItems, product]);
    }
  };

  return (
    <div className="p-5 mx-auto max-w-md">
      <button onClick={addToCart} className="m-4 px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ringn justify-center">カートに追加</button>
      <div className="border border-gray-300 p-5 mx-auto max-w-md">
        {cartItems.map((item, index) => (
          <div key={index} className="p-1 m-1 justify-center">
            {item.PRD_NAME} - {item.PRD_PRICE}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
import React from "react";

interface AddedItemsListProps {
  items?: {
    prd_id: number;
    prd_name: string;
    prd_cd: string;
    prd_price: number;
  }[];
}

const AddedItemsList: React.FC<AddedItemsListProps> = ({ items }) => {
  // `items`が`undefined`の場合、デフォルト値として空配列を使用
  const itemsToShow = items || [];

  return (
    <>
      <div
        className="w-full max-w-md p-4 border-2 border-blue-500 rounded my-4 bg-blue-50"
        aria-labelledby="added-items-heading"
        role="region"
      >
        <h2 id="added-items-heading" className="font-bold text-blue-700">
          購入商品:
        </h2>
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
      </div>
    </>
  );
};

export default AddedItemsList;

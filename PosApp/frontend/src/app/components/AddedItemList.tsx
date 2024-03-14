
import React from "react";

interface AddedItemsListProps {
  items: {
    prd_id: number;
    prd_name: string;
    prd_cd: string;
    prd_price: number;
  }[];
}

const AddedItemsList: React.FC<AddedItemsListProps> = ({ items }) => {
  return (
    <>
      <div className="w-full max-w-md p-4 border-2 border-blue-500 rounded my-4 bg-blue-50">
      <h2 className="font-bold text-blue-700"> Added Items:</h2>
        {items.map((addedItem, index) => (
          <div key={index} >
            {/* <p>Product ID: {addedItem.prd_id}</p>
            <p>Product Name: {addedItem.prd_name}</p>
            <p>Product Code: {addedItem.prd_cd}</p>
            <p>Product Price: {addedItem.prd_price}</p> */}
            <p>✔︎&nbsp;{addedItem.prd_name} x {addedItem.prd_price}円</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddedItemsList;
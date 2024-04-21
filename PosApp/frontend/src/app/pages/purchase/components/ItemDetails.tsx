import React from "react";

interface ItemDetailsProps {
  item: {
    prd_id: number;
    prd_name: string;
    prd_cd: string;
    pac_unit: string;
    sale_company : string;
    mnf_company : string;
    ingrdnt : string;
    prd_price : number;
    smd_yn_fg : string;
  } | null;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="w-full max-w-md p-4  rounded my-4 bg-[rgba(123,97,255,0.23)]" >
      <p>商品名: {item.prd_name}</p>
      <p>有効成分: {item.ingrdnt}</p>
      <p>金額: {item.prd_price}</p>
    </div>
  );
};

export default ItemDetails;
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
    <div className="w-full max-w-md p-4 border-2 border-green-500 rounded my-4 bg-teal-50" >
      <p>商品ID: {item.prd_id}</p>
      <p>商品CD: {item.prd_cd}</p>
      <p>商品名: {item.prd_name}</p>
      <p>包装: {item.pac_unit}</p>
      <p>製造販売業者: {item.mnf_company}</p>
      <p>有効成分: {item.ingrdnt}</p>
      <p>金額: {item.prd_price}</p>
      <p>セルフメディケーション税制優遇: {item.smd_yn_fg}</p>
    </div>
  );
};

export default ItemDetails;
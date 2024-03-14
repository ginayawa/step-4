import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { IDtype, Producttype } from '../type';

// type OutputAriaProps = {
//   productid: IDtype | null;
// };

type OutputAriaProps = {
    productid: Producttype | null; // IDtypeからProducttypeに変更
  };

type Response = {
  status: string;
  message?: Producttype | string;
};

// const OutputAria: React.FC<OutputAriaProps> = ({ productid }) => {
//     const [data, setData] = useState<Response | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             if (productid) {
//                 try {
//                     const response = await fetch('http://127.0.0.1:8000/search_product/', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({ code: productid.PRD_ID }),
//                     });
//                     if (response.ok) {
//                         const result = await response.json();
//                         setData({ status: result.status, message: result.message });
//                     } else {
//                         console.error('Fetching data failed with status:', response.status);
//                         setData({ status: 'failed', message: 'Fetching data failed' });
//                     }
//                 } catch (error) {
//                     console.error('Fetching data failed', error);
//                     setData({ status: 'failed', message: 'Error fetching data' });
//                 }
//             }
//         };
        
//         fetchData();
//     }, [productid]);

//     return (
//             <div className="border border-gray-300 p-5 mx-auto max-w-md">
//                 <div className="text-left py-2">
//                 {data?.status === "success" && typeof data.message !== 'string' ? (
//                     <>
//                         <div>ステータスコード：Success</div>
//                         <div className="border p-2 my-2">PRD_CD：{data.message?.PRD_CD}</div>
//                         <div className="border p-2 my-2">PRD_NAME：{data.message?.PRD_NAME}</div>
//                         <div className="border p-2 my-2">PRD_PRICE：{data.message?.PRD_PRICE}</div>
//                     </>
//                 ) : (
//                     <div>{data?.message?.toString()}</div>
//                 )}
//             </div>
//             {data?.status === "success" && <Cart product={data.message as Producttype} />}
//         </div>
//     );
// }
const OutputAria: React.FC<OutputAriaProps> = ({ productid }) => {
    // useEffectとデータ取得ロジックを削除し、外部から渡されたproductidを直接使用
  
    return (
      <div className="border border-gray-300 p-5 mx-auto max-w-md">
        <div className="text-left py-2">
          {productid ? (
            <>
              <div>ステータスコード：Success</div>
              <div className="border p-2 my-2">PRD_CD：{productid.PRD_CD}</div>
              <div className="border p-2 my-2">PRD_NAME：{productid.PRD_NAME}</div>
              <div className="border p-2 my-2">PRD_PRICE：{productid.PRD_PRICE}</div>
            </>
          ) : (
            <div>商品が見つかりません。</div>
          )}
        </div>
        {productid && <Cart product={productid} />}
      </div>
    );
  }
  
export default OutputAria;
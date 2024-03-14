import React, { useState, useEffect } from 'react';
import Cart from './Cart'; // Cart コンポーネントのパスを適切に設定してください
// 型定義インポート
import { IDtype, Producttype } from '../type';

type OutputAriaProps = {
  productid: IDtype | null;
};

type Response = {
  status: number; // ステータスコードを数値で保持
  message?: Producttype;
};

const OutputAria: React.FC<OutputAriaProps> = ({ productid }) => {

    const [data, setData] = useState<Response | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (productid) {
    //             try {
    //                 const response = await fetch('http://127.0.0.1:8000/search_product/', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({ code: productid.PRD_ID }),
    //                 });
    //                 const result = await response.json();
    //                 setData({ status: response.status, ...result });
    //             } catch (error) {
    //                 console.error('Fetching data failed', error);
    //                 setData({ status: 500 }); // 例外が発生した場合は、500とみなす
    //             }
    //         }
    //     };

        useEffect(() => {
            const fetchData = async () => {
                if (productid) {
                    try {
                        const response = await fetch('http://127.0.0.1:8000/search_product/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ code: productid.PRD_ID }),
                        });
                        const result = await response.json();
                        setData({ status: response.status, ...result });
                    } catch (error) {
                        console.error('Fetching data failed', error);
                        setData({ status: 500 }); // 例外が発生した場合は、500とみなす
                    }
                }
            };


        fetchData();
    }, [productid]);


    // データフェッチングのステータスを表示
    return (
        <div>
            <div className="border border-gray-300 p-5 mx-auto max-w-md">
                <div className="text-left py-2">
                <div>ステータスコード：{data?.status}</div>
                {data?.message && (
                    <>
                    <div className="border p-2 my-2">PRD_CD：{data.message.PRD_CD}</div>
                    <div className="border p-2 my-2">PRD_NAME：{data.message.PRD_NAME}</div>
                    <div className="border p-2 my-2">PRD_PRICE：{data.message.PRD_PRICE}</div>
                    </>
                )}
                </div>
            </div>
            {/* Cart コンポーネントを追加。data?.message が存在する場合のみ Cart コンポーネントを表示 */}
            {data?.message && <Cart product={data.message} />}
        </div>
    );
}

export default OutputAria;


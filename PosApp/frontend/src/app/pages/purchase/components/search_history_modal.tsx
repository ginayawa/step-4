import React from 'react';

// SearchHistoryModal コンポーネントが受け取るプロパティの型を定義
interface SearchHistoryModalProps {
    handleFetchTrans: () => void;
    setIsSearchTranList: (value: boolean) => void;
    isSearchTranList: boolean;
    trans: Array<any>;
    SearchTransList: React.FC<{ trans: Array<any> }>;
}

const SearchHistoryModal: React.FC<SearchHistoryModalProps> = ({
    handleFetchTrans,
    setIsSearchTranList,
    isSearchTranList,
    trans,
    SearchTransList,
}) => (
    <div>
        <button 
            onClick={() => {
                handleFetchTrans();
                setIsSearchTranList(true);
            }} 
            className="flex flex-col items-center justify-center bg-[#c8b7ef50] mx-auto my-10 p-2 text-[#b595ff] rounded-md">
            <span className="mt-2 text-xs">購入履歴を検索</span> 
        </button>
        {isSearchTranList && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className='w-2/3 bg-[rgb(254,254,255)] pb-10 rounded'>
                    <div className='flex justify-center'>
                        <SearchTransList trans={trans} />
                    </div>
                    <div>
                        <button 
                            onClick={() => { setIsSearchTranList(false); }}
                            className="mx-auto block bg-[rgba(123,97,255,0.61)] text-white rounded-full py-2 px-4 my-8">閉じる
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default SearchHistoryModal;

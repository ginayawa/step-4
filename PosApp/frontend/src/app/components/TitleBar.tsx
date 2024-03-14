import React from 'react';
import Image from 'next/image'
import Link from 'next/link'; // Next.jsのLinkコンポーネントをインポート

const TitleBar: React.FC = () => {
  return (
    <div className="mx-10 my-4 flex items-center justify-between"  style={{ borderBottom: '3px solid #007bff' }}>
    
      {/* 中央のタイトル */}
      <div className="flex-1" style={{ flex: 2, display: 'flex', justifyContent: 'center' }}> {/* 50% width */}
        <h1 className="text-black text-3xl font-bold">
          Tech0 STEP4 POSアプリ
        </h1>
      </div>
    
  </div>
  );
};

export default TitleBar;

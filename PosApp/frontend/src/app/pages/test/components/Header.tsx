import React from 'react';
import Image from 'next/image'
import HeaderImage from '../poblic/images/Header.png'; // 正しいパスにしてください

const Header = () => {
    return (
      <div className="mx-10 my-4 flex items-center justify-between" style={{ borderBottom: '2px solid #878787' }}>    
          <Image src={HeaderImage} alt="HeaderImage" layout="responsive" width={500} height={500} style={{ marginBottom: '20px' }} />
      </div>
    );
  };
  
  export default Header;
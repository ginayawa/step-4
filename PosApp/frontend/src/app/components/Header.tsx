import React from 'react';
import Image from 'next/image'
import HeaderImage from '../../../public/Header.png'; // 正しいパスにしてください

const Header = () => {
    return (
      <div className="my-4 flex items-center justify-between" style={{ borderBottom: '2px solid #878787' }}>    
          <Image src={HeaderImage} alt="HeaderImage" height={500} style={{ marginBottom: '20px' }} priority/>
      </div>
    );
  };
  
  export default Header;
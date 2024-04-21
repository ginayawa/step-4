import React from 'react';
import Image from 'next/image'
import FooterImage from '../../../public/Footer.png'; 

const Footer = () => {
    return (
      <div className="my-4 flex items-center justify-between">    
          <Image src={FooterImage} alt="HeaderImage" height={500} priority/>
      </div>
    );
  };
  
  export default Footer;
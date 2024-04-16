import React from 'react';
import Image from 'next/image'
import FooterImage from '../poblic/images/Footer.png'; 

const Footer = () => {
    return (
      <div className="mx-10 my-4 flex items-center justify-between">    
          <Image src={FooterImage} alt="HeaderImage" layout="responsive" width={500} height={500} />
      </div>
    );
  };
  
  export default Footer;
"use client"
import React, { useRef, useEffect } from 'react';

const POSPage = () => {
  const videoRef = useRef(null);

  useEffect(() =>{
    async function getMedia() {
      try{
        const stream = await navigator.mediaDevices.getUserMedia({video:true});
        if(videoRef.current){
          videoRef.current.srcObject = stream;
        }
      } catch(error){
        console.error('Error', error);
      }
    }

    getMedia();
  },[]);

    return (
        <>
           <div>
            <video ref={videoRef} autoPlay playsInline width="720" height="560"/>
           </div>
        </>
    );
};

export default POSPage;



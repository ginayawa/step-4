import React, { useState, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import Webcam from "react-webcam";

// Propsの型定義を追加
type BarcodeInputProps = {
  onProductChange: (newProductId: string) => void;
  barcodeValue: string;
};

const BarcodeInput: React.FC<BarcodeInputProps> = ({ onProductChange, barcodeValue }) => {
  const [cameraActive, setCameraActive] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const handleScan = async (imageSrc: string) => {
    const codeReader = new BrowserMultiFormatReader();
    try {
      const result = await codeReader.decodeFromImageUrl(imageSrc);
      onProductChange(result.getText());
    } catch (error) {
      console.error(error);
      // ユーザーにエラーメッセージを表示するためのロジックを追加
      alert('バーコードを検出できませんでした。もう一度試してください。');
    }
  };

  const capturePhoto = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      handleScan(imageSrc);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Sending PRO_ID:', barcodeValue); // barcodeValue を使用
    // 送信処理を実装
  };

  return (
    <div className="px-5 py-5 mx-auto max-w-md">
      {cameraActive ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="30%"
            videoConstraints={{ facingMode: "user" }}
          />
          <button
            onClick={capturePhoto}
            className="mt-4 px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring"
          >
            写真を撮る
          </button>
        </>
      ) : (
        <button
          onClick={() => setCameraActive(true)}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          カメラを起動
        </button>
      )}
      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <label htmlFor="pro_id" className="block mb-1">PRO_ID</label>
        <input
          type="text"
          id="pro_id"
          name="pro_id"
          value={barcodeValue} // 変更: barcodeValue を使用
          onChange={(e) => onProductChange(e.target.value)} // 変更: onProductChange を呼び出す
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          送信
        </button>
      </form> */}
    </div>
  );
};

export default BarcodeInput;
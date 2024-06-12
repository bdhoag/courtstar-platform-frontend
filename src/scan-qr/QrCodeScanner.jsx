import React, { useEffect, useState } from 'react';
import QrScanner from 'react-qr-scanner'

const QrCodeScanner = () => {
  const [data, setData] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      setData(result);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  useEffect(() => {
    console.log(data);
  }, [data])


  return (
    <div className="flex flex-col items-center justify-center h-[500px] bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">QR Scanner</h1>
      <div className="bg-white p-4 rounded-lg shadow-xl">
        <QrScanner
          delay={300}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          className="w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default QrCodeScanner;

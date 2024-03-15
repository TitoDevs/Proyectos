import React, { createContext, useState } from 'react';

export const QrContext = createContext();

export const QrProvider = ({ children }) => {
  const [qrData, setQrData] = useState('');

  const updateQrData = (data) => {
    setQrData(data);
  };

  return (
    <QrContext.Provider value={{ qrData, updateQrData }}>
      {children}
    </QrContext.Provider>
  );
};
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import WebViewer from './components/WebViewer';
import NavButtons from './components/NavButtons';
import './App.css';

function App() {
  const [urls, setUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpload = (data) => {
    setUrls(data);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div>
      <Navbar />
      <FileUpload onUpload={handleUpload} />

      {urls.length > 0 && (
        <>
          <NavButtons
            currentIndex={currentIndex}
            total={urls.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />

          <WebViewer url={urls[currentIndex]} />
        </>
      )}
    </div>
  );
}

export default App;
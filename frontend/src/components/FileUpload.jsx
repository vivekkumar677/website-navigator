import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async (selectedFile) => {
    const uploadFile = selectedFile || file;

    if (!uploadFile) {
      alert("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadFile);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/files/upload",
        formData
      );
      onUpload(res.data.urls);
    } catch (err) {
      console.error(err);
    }
  };

  // Drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    handleUpload(droppedFile); // auto-upload on drop
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: "2px dashed #aaa",
          padding: "40px",
          textAlign: "center",
          background: dragActive ? "#f0f8ff" : "#fff",
          cursor: "pointer",
        }}
      >
        <p>Drag & drop your Excel file here</p>
        <p>or</p>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        <button type="button" onClick={() => handleUpload()}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
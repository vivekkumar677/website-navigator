import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = "https://website-navigator-hn0v.onrender.com/"

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucess, setSuccess] = useState("");

  const validTypes = [".xlsx", ".xls", ".csv"];

  const validateFile = (file) => {
    if (!file) return "No file selected";

     const fileName = file.name.toLowerCase();
      const isValidExtension = validTypes.some(ext =>
        fileName.endsWith(ext)
      );

    if (!isValidExtension) {
      return "Only Excel or CSV files are allowed";
    }

    if (file.size > 5 * 1024 * 1024) {
      return "File size must be less than 5MB";
    }

    return null;
  }

  const handleUpload = async (selectedFile) => {
    const uploadFile = selectedFile || file;

    if (!uploadFile) {
      alert("No file selected");
      return;
    }

    const validationError = validateFile(uploadFile);
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", uploadFile);

    try {
      const res = await axios.post(
        `${BACKEND_URL}api/files/upload`,
        formData
      );
      onUpload(res.data.urls);
      setSuccess("✅ File uploaded successfully!")
    } catch (err) {
      setError("❌ Upload failed. Please try again.");
    } finally {
      setLoading(false);
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
    <div className="glass-card">
      <div
        className={`drag-area ${dragActive ? "active" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <h2>📂 Upload Excel File</h2>
        <p style={{ opacity: 0.7 }}>Drag & drop your Excel file here</p>
        <p>or</p>

        <label className={`file-upload ${file ? 'Selected' : ""}`}>
          <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={(e) => setFile(e.target.files[0])}
          />
          <span>
            {file ? `📄 ${file.name}` : "📁 Choose your Excel file"}
          </span>
        </label>

        <br /><br />

        <button onClick={() => handleUpload()} disabled={loading}>
          { loading ? "Uploading..." : "Upload 🚀" }
        </button>
        { error && <p className="error-text">{error}</p>}
        { sucess && <p className="success-text">{sucess}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
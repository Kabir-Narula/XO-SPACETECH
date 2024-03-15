import React, { useState, ChangeEvent } from "react";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile: File | null = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleFileUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name);
      setTimeout(() => {
        console.log("File uploaded successfully:", file.name);
      }, 2000);
    } else {
      console.error("No file selected.");
    }
  };

  return (
    <div>
      <h2>Welcome to Upload Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Choose a file</label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf"
          />
        </div>
        <button type="button" onClick={handleFileUpload}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default Upload;

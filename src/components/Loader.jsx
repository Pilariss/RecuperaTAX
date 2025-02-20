import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/loader.css";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <ClipLoader size={60} color="#fff" />
    </div>
  );
};

export default Loader;
import React from "react";
import "./App.css";

const ResetButton = ({ setObj, isLoading, setIsLoading }) => {
  const onReset = async () => {
    const url = "https://robadrinsa1.blob.core.windows.net/software/data.json";
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setObj(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="button" type="button" onClick={() => onReset()}>
      Reset
    </button>
  );
};

export default ResetButton;

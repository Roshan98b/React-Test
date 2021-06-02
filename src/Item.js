import React from "react";
import "./App.css";

const Item = ({ name, obj, setObj }) => {
  const onRemove = () => {
    setObj(obj.filter((item) => item.name !== name));
  };

  return (
    <div className="item">
      <h1 className="label">{name}</h1>
      <button className="button" type="button" onClick={() => onRemove()}>
        Remove
      </button>
    </div>
  );
};

export default Item;

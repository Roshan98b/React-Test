import React, { useRef } from "react";
import "./App.css";

const Form = ({ obj, setObj }) => {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(true);
    const ele = { id: new Date().getTime(), name: nameRef.current.value };
    const finalEle = [...obj, ele];
    setObj(finalEle);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="item">
        <h2 className="label">
          <label>Enter Name</label>
        </h2>
        <input
          type="text"
          className="input"
          id="name"
          name="name"
          ref={nameRef}
        ></input>
      </div>
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;

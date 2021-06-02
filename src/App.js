import React, { useState, useEffect } from "react";
import Item from "./Item";

import "./App.css";
import ResetButton from "./ResetButton";
import Form from "./Form";

const App = () => {
  const [obj, setObj] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
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

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          {obj.map((item) => {
            return (
              <Item key={item.id} {...item} obj={obj} setObj={setObj}></Item>
            );
          })}
          <ResetButton
            setObj={setObj}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          ></ResetButton>
        </div>
        <div className="container">
          <Form obj={obj} setObj={setObj}></Form>
        </div>
      </>
    );
  }
};

export default App;

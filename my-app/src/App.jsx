import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [data, setData] = useState({ name: "", password: "" });

  const onChangeName = (event) => {
    setData((currentData) => ({
      ...currentData,
      name: event.target.value,
    }));
  };

  const onChangePassword = (event) => {
    setData((currentData) => ({
      ...currentData,
      password: event.target.value,
    }));
  };

  return (
    <div>
      <input type="text" onChange={onChangeName} />
      <input type="password" onChange={onChangePassword} />
      <p>ваше имя: {data.name} </p>
      <p>ваш пароль: {data.password} </p>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { LoginUser } from "../../Service/account/account.js";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "", 
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await LoginUser({
        username: loginData.username,
        password: loginData.password,
      });
      alert("Login successful!");
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          name="username" 
          value={loginData.username}
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleOnChange}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
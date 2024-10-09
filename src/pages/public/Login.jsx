import React, { useState } from "react";
import * as accountService from "../../Service/account/account.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginsignupbackground from "../../assets/login-signupbackground.jpg";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "../../styles/public/login/login.css";
export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: accountService.LoginUser,
    onSuccess: (response) => {
      if (response && response.code === 1002) {
        toast.error("wrong username or password", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("Login successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

      queryClient.invalidateQueries({
        queryKey: ["account"],
      });
    },
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
    if (!loginData.username || !loginData.password) {
      toast.error("Please enter both username and password", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      await mutation.mutateAsync(loginData);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      {/* <img src={loginsignupbackground} alt="" /> */}
      <div className="login-content">
        <div className="login-background">
          <form className="login-form" onSubmit={handleLogin}>
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
          <div className="signup-link">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

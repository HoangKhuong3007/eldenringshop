import React, { useEffect, useState } from "react";
import "../../styles/public/signup/signup.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as accountService from "../../Service/account/account.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const SignUp = () => {
  const [submitData, setSubmitData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSubmitData({
      ...submitData,
      [name]: value,
    });
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: accountService.CreateUser,
    onSuccess: (response) => {
      if (response && response.code === 1001) {
        toast.error("user existed", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (response && response.code === 1003) {
        toast.error("Usernane must be at least 3 characters!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (response && response.code === 1004) {
        toast.error("password must be 8 characters!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (response && response.code === 1005) {
        toast.error("email already exist, use another email!", {
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
        toast.success("Sign up successfully", {
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
          navigate("/login");
        }, 1000);
      }
      queryClient.invalidateQueries({
        queryKey: ["account"],
      });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!submitData.username || !submitData.email || !submitData.password) {
      toast.error("Please enter full information", {
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
      await mutation.mutateAsync(submitData);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    console.log(submitData);
  }, [submitData]);

  return (
    <div className="signup-container">
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
        <form className="signup-form" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleOnChange}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
      <ToastContainer />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

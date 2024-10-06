import React, { useEffect, useState } from "react";
import "../../styles/public/signup/signup.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as accountService from "../../Service/account/account.js";

export const SignUp = () => {
  const [submitData, setSubmitData] = useState({
    username: "",
    email: "",
    password: "",
  });
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
    onSuccess: () => {
      alert("Sign up successfully");
      queryClient.invalidateQueries({
        queryKey: ["account"],
      });
    },
  });

  const validateEmail = (email) => {  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!submitData.email || !submitData.password) {
      alert("Please enter email and password");
      return;
    }

    if (!validateEmail(submitData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await mutation.mutateAsync(submitData);
    } catch (error) {
      if (error.message === "User existed") {
        alert("User already exists. Please use a different username.");
      } else if (error.message === "Invalid username") {
        alert("Username must be at least 3 characters!");
      } else if (error.message === "Invalid password") {
        alert("Password must be at least 8 characters!");
      } else if (error.message === "Email existed") {
        alert("Email already exists. Please use a different email!");
      } else {
        alert("An error occurred during signup. Please try again.");
      }
    }
  };

  useEffect(() => {
    console.log(submitData);
  }, [submitData]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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
  );
};
import React, { useEffect, useState } from "react";
import "../../styles/public/signup/signup.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as accountService from "../../Service/account/account.js";

export const SignUp = () => {
  const [submitData, setSubmitData] = useState({
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
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!submitData.email || !submitData.password) {
      alert("Please enter email and password");
      return;
    }

    if (!validateEmail(submitData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      await mutation.mutateAsync(submitData);
    } catch (error) {
      // Display specific message if email is already in use
      if (error.message === "Email is already in use") {
        alert("This email is already registered. Please use a different email.");
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

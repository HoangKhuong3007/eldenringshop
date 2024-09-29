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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!submitData.email || !submitData.password) {
      alert("Please enter email and password");
      return;
    }
    try {
      await mutation.mutateAsync(submitData);
    } catch (error) {}
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

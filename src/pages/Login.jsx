import React from 'react'
import './Login.css';

import "./SignUp.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const handleForSignUp = async (data) => {
    console.log("logging  Data", data);
    // dispatch(signUp(data, navigate));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
    <form onSubmit={handleSubmit(handleForSignUp)} className="signup-form">
     

   

      <div className="signup-name">
        <label htmlFor="email">
          email<sup className=" ">*</sup>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.firstname && (
          <span className="text-pink-100">Please Enter email </span>
        )}
      </div>

      <div className="signup-name">
        <label htmlFor="password">
          password<sup className=" ">*</sup>
        </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter first name"
          {...register("password", {
            required: { value: true, message: "please Enetr password" },
            maxLength: { value: 8, message: "Invalid password" },
            minLength: { value: 8, message: "Invalid password" },
          })}
        />
        {errors.firstname && (
          <span className="text-pink-100">Please Enter Your password</span>
        )}
      </div>

    

      <div>
        {" "}
        <button className="btn-signup" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Login
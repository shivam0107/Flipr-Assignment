import React from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { signUp } from "../services/operations/auth";

const SignUp = () => {
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
    const res = signUp(data , navigate)
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
          <label htmlFor="firstname">
            first Name<sup className=" ">*</sup>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-pink-100">Please Enter first Name</span>
          )}
        </div>

        <div className="signup-name">
          <label htmlFor="lastname">
            lastName<sup className=" ">*</sup>
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter lastname name"
            {...register("lastname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-pink-100">Please Enter last Name</span>
          )}
        </div>

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

        <div className="signup-name">
          <label htmlFor="address">
            address<sup className=" ">*</sup>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter address "
            {...register("address", { required: true })}
          />
          {errors.firstname && (
            <span className="text-pink-100">Please Enter Your address</span>
          )}
        </div>

        <div className="signup-name">
          <label htmlFor="contact">
            contact<sup className=" ">*</sup>
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Enter password"
            {...register("contact", {
              required: { value: true, message: "please Enetr conatct" },
              maxLength: { value: 10, message: "Invalid contact Number" },
              minLength: { value: 10, message: "Invalid contact Number" },
            })}
          />
          {errors.firstname && <span className="">Please Enter Your contact</span>}
        </div>

        <div className="signup-name">
          <label htmlFor="gender">
            gender<sup className=" ">*</sup>
          </label>
          <select {...register("gender", { required: true })}>
            <option>Male</option>
            <option>female</option>
            <option>other</option>
          </select>

          {errors.firstname && (
            <span className="text-pink-100">Please Enter Your gender</span>
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
  );
};

export default SignUp;

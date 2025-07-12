import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-extrabold">Welcome Back</h1>
        <p className="text-md font-semibold">Login with FastService</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 text-sm">Email is required</p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters
              </p>
            )}

            {/* Forgot password link */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn  bg-[#CAEB66] mt-4">
              Login
            </button>
          </fieldset>
          <div>
            <p className="link link-hover text-md">
              <strong>
                Don’t have any account?
                <Link className="text-yellow-500 underline" to="/register">
                  Register
                </Link>
              </strong>
            </p>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;

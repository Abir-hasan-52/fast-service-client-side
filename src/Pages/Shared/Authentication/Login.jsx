import React from "react";
import { useForm } from "react-hook-form";

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
    <div>
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
        </fieldset>
        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

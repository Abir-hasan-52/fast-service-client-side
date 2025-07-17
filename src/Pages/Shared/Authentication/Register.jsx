import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const [profilePic,setProfilePic]=useState('');
  const { createUser,updateUserProfile } = useAuth();
  const axiosInstance = useAxios();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    console.log(email, password);
    createUser(email, password)
      .then( async(result) => {
        console.log(result.user);


        // update userinfo in the database

        const userInfo ={
          email:data.email,
          role:"user", //default value 
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        }
        const userRes= await axiosInstance.post('/users',userInfo);
        console.log(userRes.data);
        // update user profile in firebase
        const userProfile = {
          displayName:data.name,
          photoURL:profilePic

        }
        updateUserProfile(userProfile)
        .then(()=>{
          console.log('profile updated')
        })
        .catch(error=>{
          console.log(error.message)
        })
        alert(`successful${result.user}`);
      })
      .catch((error) => {
        console.log(error);
        alert(`error ${error.message}`);
      });
  };
  const handleUploadImage = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);


    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`;
    const res = await  axios.post(imageUploadUrl, formData);
    setProfilePic("image", res.data.data.url);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-extrabold">Create an Account</h1>
        <p className="text-md font-semibold">Register with FastService</p>
         {/* {
          user? <>
                <img src={user.}></img>
          </>
         } */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* Your Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Enter your name"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 text-sm">name is required</p>
            )}
            {/* Your Profile */}
            <label className="label">Profile</label>
            <input
              type="file"
              onChange={handleUploadImage}
              className="input"
              placeholder="enter your photo"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 text-sm">email is required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: {
                  hasUpper: (value) =>
                    /[A-Z]/.test(value) ||
                    "Must contain at least one uppercase letter",
                  hasLower: (value) =>
                    /[a-z]/.test(value) ||
                    "Must contain at least one lowercase letter",
                },
              })}
            />

            {errors.password?.types &&
              Object.values(errors.password.types).map((msg, idx) => (
                <p key={idx} className="text-red-500 text-sm">
                  {msg}
                </p>
              ))}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn  bg-[#CAEB66] mt-4">
              Register
            </button>
          </fieldset>
          <div>
            <p className="link link-hover text-md">
              <strong>
                Already Have an Account?
                <Link className="text-yellow-500 underline" to="/login">
                  Login
                </Link>
              </strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

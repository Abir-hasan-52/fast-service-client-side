import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BeARider = () => {
  const { user } = useAuth();
  const serviceCenters = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const [selectedRegion, setSelectedRegion] = useState("");
  const [districts, setDistricts] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
     
    formState: { errors },
  } = useForm();

  const uniqueRegions = [...new Set(serviceCenters.map((item) => item.region))];

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);

    const filteredDistricts = serviceCenters
      .filter((item) => item.region === region)
      .map((item) => item.district);

    const uniqueDistricts = [...new Set(filteredDistricts)];
    setDistricts(uniqueDistricts);
  };

  const onSubmit = (data) => {
    const riderData = {
      ...data,
      name:user?.displayName || '',
      email:user?.email || '',
      status: "pending",
      created_at: new Date().toISOString(),

    };

    // TODO: Send to backend API
    console.log("Rider Data Submitted:", riderData);
    axiosSecure.post('/rider', riderData)
    .then(res => {
        console.log(res.data.insertedId);
        if (res.data.insertedId) {
            // Show SweetAlert on success
            Swal.fire({
                title: "Application Submitted!",
                text: "Your rider application is now pending for approval.",
                icon: "success",
                confirmButtonText: "OK",
            });
        }
    })



     

    // reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input
            defaultValue={user?.displayName || ""}
            {...register("name", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            defaultValue={user?.email || ""}
            {...register("email", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="label">Age</label>
          <input
            type="number"
            {...register("age", { required: true, min: 18 })}
            className="input input-bordered w-full"
          />
          {errors.age && (
            <span className="text-red-500">Minimum age is 18</span>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="label">Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* National ID */}
        <div>
          <label className="label">National ID Number</label>
          <input
            {...register("nid", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Region */}
        <div>
          <label className="label">Region</label>
          <select
            {...register("region", { required: true })}
            onChange={handleRegionChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Region</option>
            {uniqueRegions.map((region, idx) => (
              <option key={idx} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div>
          <label className="label">District</label>
          <select
            {...register("district", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select District</option>
            {districts.map((district, idx) => (
              <option key={idx} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Bike Brand */}
        <div>
          <label className="label">Bike Brand</label>
          <input
            {...register("bikeBrand", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Bike Registration */}
        <div>
          <label className="label">Bike Registration Number</label>
          <input
            {...register("bikeNumber", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        {/* Additional information (optional)*/}
        <div>
          <label className="label">Additional information(optional)</label>
          <input
            {...register("additional", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button className="btn btn-primary w-full mt-2">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BeARider;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: parcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-parcels", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this parcel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/parcels/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted",
            text: "Parcel has been deleted.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          refetch(); // ✅ Refresh data after deletion
        } else {
          throw new Error("Deletion failed");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Something went wrong!", "error");
      }
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">My Parcels</h2>

      <table className="table table-zebra w-full text-sm">
        <thead>
          <tr className="text-base text-gray-700">
            <th>#</th>
            <th>Tracking ID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Delivery</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id}>
              <td>{index + 1}</td>
              <td className="font-semibold">{parcel.tracking_id}</td>
              <td>{parcel.title}</td>
              <td>
                <span
                  className={`badge ${
                    parcel.type === "document" ? "badge-info" : "badge-warning"
                  }`}
                >
                  {parcel.type}
                </span>
              </td>
              <td>৳{parcel.cost}</td>
              <td>
                <span
                  className={`badge ${
                    parcel.payment_status === "paid"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {parcel.payment_status}
                </span>
              </td>
              <td>
                <span
                  className={`badge ${
                    parcel.delivery_status === "delivered"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {parcel.delivery_status}
                </span>
              </td>

              {/* Responsive Action Buttons */}
              <td>
                <div className="flex gap-2 lg:flex-col">
                  <button className="btn btn-sm btn-outline btn-info">
                    View
                  </button>
                  <button
                    disabled={parcel.payment_status === "paid"}
                    className="btn btn-sm btn-outline btn-success"
                  >
                    Pay
                  </button>
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;

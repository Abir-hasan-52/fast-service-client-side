import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="text-center py-16">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Payment History</h2>

      <table className="table table-zebra w-full text-sm">
        <thead>
          <tr className="text-base text-gray-700">
            <th>#</th>
            <th>Parcel ID</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <td>{index + 1}</td>
              <td className="text-xs break-words">{payment.parcelId}</td>
              <td>{payment.email}</td>
              <td>${payment.amount}</td>
              <td>{payment.paymentMethod}</td>
              <td className="text-xs break-words">{payment.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;

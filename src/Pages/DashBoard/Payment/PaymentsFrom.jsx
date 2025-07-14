import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentsFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { parcelId } = useParams();
  console.log(parcelId);
  const axiosSecure = useAxiosSecure();

  const [error, setError] = useState("");

  const {
    isPending,
    isError,
    data: parcelInfo = {},
  } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`parcels/${parcelId}`);
      return res.data;
    },
  });
  if (isPending) {
    return <span>Loading...</span>;
  }
  console.log(parcelInfo);
  const amount = parcelInfo.cost;
  const amountInCents = amount * 100;
  console.log(amountInCents);
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      setError("");
      console.log("payment method", paymentMethod);
    }
    // create payment intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amountInCents,
      parcelId,
    });

    const clientSecret = res.data.clientSecret;
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "jenny Rosen",
        },
      },
    });
    if (result.error) {
      console.log(result.error.message);
    } else {
      result.paymentIntent.status === "succeeded";
      console.log("payment succeeded!");
      console.log(result);
    }
    console.log("res  from intent", res);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          className="btn btn-primary mt-4 w-full"
          disabled={!stripe}
        >
          Pay ${amount}
        </button>
        {error && <p className="text-red-700">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentsFrom;

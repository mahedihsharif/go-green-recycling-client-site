import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePayment from "./../StripePayment/StripePayment";
const Stripes = ({ handlePaymentSuccess }) => {
  const stripePromise = loadStripe(
    "pk_test_51IeCGeC8AvDso05GV3C0XOjeZAk3g9TFOO04AtQzFsVmRBSLuJtVHDHDctf4nDNZgoUxQsofjFZeAOnKFEsfOMSy00dbCEIeZh"
  );
  return (
    <Elements stripe={stripePromise}>
      <StripePayment
        handlePaymentSuccess={handlePaymentSuccess}
      ></StripePayment>
    </Elements>
  );
};

export default Stripes;

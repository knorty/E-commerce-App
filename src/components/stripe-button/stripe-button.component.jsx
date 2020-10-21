import React from "react";
import StripeCheckout from "react-stripe-checkout";
import kLogo from "../../assets/k-logo-borderless.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HeYNFBxLxW3GLccMGoULCqzdI5HDDET1Xfv9NH3OERVYgpwzPinGYtZyOB5FIvWpsccbw8bWPrGIB1AEDmurPd200yRndu8Xp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="K Clothing"
      billingAddress
      shippingAddress
      image={kLogo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

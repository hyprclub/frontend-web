// import axios from "axios";
import savePayment, { paymentDetailsSchema } from "./payment.saveData";

const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const __DEV__ = document.domain === "localhost";

async function displayRazorpay(props: {
  userName: string;
  paymentType: "Creator Support" | "NFT Purchase";
}): Promise<void> {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  const order_data = await fetch(
    "https://us-central1-hyprclub-7a2b.cloudfunctions.net/app/razorpay",
    {
      method: "POST",
      body: JSON.stringify({
        amount: 6500,
        currency: "INR",
        receipt: "receipt#fromNFT",
      }),
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.log("fetch request failed: ", error);
    });

  const paymentDetails: paymentDetailsSchema = {
    senderUID: props.userName,
    // senderUID: "stark#12",
    reciepientUID: "potts#30",
    timestamp: Date().toString(),
    transactionSuccess: true,
    transactionType: props.paymentType,
    creatorSupportUID: "bassi#21",
    razorpayOrderData: order_data,
  };

  const options = {
    key: __DEV__ ? "rzp_test_7FUMLF1Lf3a2eD" : "PRODUCTION_KEY",
    currency: order_data.currency,
    amount: order_data.amount.toString(),
    order_id: order_data.id,
    name: "NFT Payment",
    description: "Thank you for buying the NFT",
    image: "https://example.com/your_logo",
    handler: (response: any) => {
      console.log(response);
      alert("Payment succesful");
      paymentDetails.razorpayOrderId = response.razorpay_payment_id;
      paymentDetails.razorpayOrderId = response.razorpay_order_id;
      paymentDetails.razorpaySignature = response.razorpay_signature;
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
    // prefill: {
    //   name: "HyprCLub",
    //   email: "support@hyprclub.com",
    //   phone_number: "9876543210",
    // },
  };

  savePayment(paymentDetails);

  const _window = window as any;
  const paymentObject = new _window.Razorpay(options);
  paymentObject.open();
}

export default displayRazorpay;

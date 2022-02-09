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

async function displayRazorpay(paymentProps: any): Promise<void> {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const orderData = await fetch(
    "https://us-central1-hyprclub-7a2b.cloudfunctions.net/app/razorpay",
    // "http://localhost:9000/hyprclub-7a2b/us-central1/app/razorpay",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: paymentProps.amount,
        currency: "INR",
        receipt: "receipt#front",
      }),
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.log("fetch request failed: ", error);
    });

  const paymentDetails: paymentDetailsSchema = {
    buyerUID: paymentProps.buyerUID,
    buyerUsername: paymentProps.buyerUsername,
    buyerEmail: paymentProps.buyerEmail,
    recipientData: paymentProps.recipientData,
    amount: orderData.amount / 100,
    timestamp: Date().toString(),
    transactionSuccess: "failed",
    transactionType: paymentProps.transactionType,
    creatorSupportUID:
      paymentProps.transactionType === "Creator Support"
        ? paymentProps.creatorSupportUID
        : "none",
    purchasedNftUID:
      paymentProps.transactionType === "NFT Purchase"
        ? paymentProps.purchasedNftUID
        : "none",
    purchasedNftData:
      paymentProps.transactionType === "NFT Purchase"
        ? paymentProps.purchasedNftData
        : "none",
    razorpayOrderData: orderData,
  };

  const options = {
    key: __DEV__ ? "rzp_test_7FUMLF1Lf3a2eD" : "PRODUCTION_KEY",
    currency: orderData.currency,
    amount: orderData.amount,
    order_id: orderData.id,
    name: paymentProps.transactionType,
    description:
      paymentProps.transactionType === "NFT Purchase"
        ? "Thank you for buying the NFT"
        : "Thank you for supporting the creator",
    // image: "https://example.com/your_logo",
    handler: (response: any) => {
      // console.log(response);
      // alert("Payment succesful");
      paymentDetails.razorpayPaymentId = response.razorpay_payment_id;
      paymentDetails.razorpaySignature = response.razorpay_signature;
      paymentDetails.razorpayOrderId = response.razorpay_order_id;
      paymentDetails.transactionSuccess = "success";
      try {
        savePayment(paymentDetails);
      } catch (error) {
        console.log("error while savePayment ", error);
      }
    },
    prefill: {
      name: paymentProps.buyerName,
      email: paymentProps.buyerEmail,
      contact: paymentProps.buyerPhoneNumber,
    },
    // notify: {
    //   sms: true,
    //   email: true
    // }
  };

  const _window = window as any;
  const paymentObject = new _window.Razorpay(options);
  paymentObject.open();
}

export default displayRazorpay;

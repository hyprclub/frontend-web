import axios from "axios";

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

async function displayRazorpay(): Promise<void> {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  //   const data = await fetch(
  //     "https://us-central1-hyprclub-7a2b.cloudfunctions.net/app/razorpay"
  //   )
  //     .then((response) => response.json())
  //     .catch((error) => {
  //       console.log("fetch request failed: ", error);
  //     });

  axios
    .post("https://us-central1-hyprclub-7a2b.cloudfunctions.net/app/razorpay", {
      amount: 9999,
      currency: "INR",
      receipt: "receipt#1",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("axios request failed: ", error);
    });

    const options = {
    key: __DEV__ ? "rzp_test_7FUMLF1Lf3a2eD" : "PRODUCTION_KEY",
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: "NFT Payment",
    description: "Thank you for buying the NFT",
    image: "https://example.com/your_logo",
    handler: function (response: any) {
      //   console.log(response);
      //   alert("Payment succesful");
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    // prefill: {
    //   name: "HyprCLub",
    //   email: "support@hyprclub.com",
    //   phone_number: "9876543210",
    // },
  };

  const _window = window as any;
  const paymentObject = new _window.Razorpay(options);
  paymentObject.open();
}

export default displayRazorpay;

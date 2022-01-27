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

  const data = await fetch("http://localhost:1337/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: __DEV__ ? "rzp_test_7FUMLF1Lf3a2eD" : "PRODUCTION_KEY",
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: "Donation",
    description: "Show support to your favourite creators.",
    handler: function (response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Kartikey",
      email: "sdfdsjfh2@ndsfdf.com",
      phone_number: "9876543210",
    },
  };
  const _window = window as any;
  const paymentObject = new _window.Razorpay(options);
  paymentObject.open();
}

export default displayRazorpay;

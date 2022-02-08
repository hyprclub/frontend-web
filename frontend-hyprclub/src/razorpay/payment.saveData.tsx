import { db } from "./../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
export interface paymentDetailsSchema {
  senderID: string;
  reciepientID: string;
  amount: number;
  timestamp: string;
  transactionSuccess: "success" | "failed" | "in process";
  transactionType: "Creator Support" | "NFT Purchase";
  creatorSupportID?: string;
  purchasedNftID?: string;
  razorpayOrderData: any;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  razorpayOrderId?: string;
}

// const createPayment = async (paymentRef: paymentDetailsSchema) => {
//   await addDoc(paymentCollectionsRef, paymentRef);
// };

const savePaymentData = async (paymentDetails: paymentDetailsSchema) => {
  const allPaymentRef = await addDoc(
    collection(db, "paymentRecords"),
    paymentDetails
  );

  const paymentType =
    paymentDetails.transactionType === "Creator Support"
      ? "creatorSupportPaymentReords"
      : "nftPurchasePaymentRecords";

  const paymentTypeRef = await addDoc(
    collection(db, paymentType),
    paymentDetails
  );

  console.log("All Payments record created with ID: ", allPaymentRef.id);
  console.log("Payment type record created with ID: ", paymentTypeRef.id);

  // createPayment(paymentDetails);
};

export default savePaymentData;

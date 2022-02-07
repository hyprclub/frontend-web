import { db } from "./../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
export interface paymentDetailsSchema {
  senderUID: string;
  reciepientUID: string;
  timestamp: string;
  transactionSuccess: boolean;
  transactionType: "Creator Support" | "NFT Purchase";
  creatorSupportUID?: string;
  purchasedNftID?: string;
  razorpayOrderData: any;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  // razorpayOrderId?: string;
  // currency: string;
  // amount: number | string;
}

// const createPayment = async (paymentRef: paymentDetailsSchema) => {
//   await addDoc(paymentCollectionsRef, paymentRef);
// };

const savePaymentData = async (paymentDetails: paymentDetailsSchema) => {
  const docRef = await addDoc(collection(db, "paymentRecords"), paymentDetails);

  console.log("Payment created with ID: ", docRef.id);

  // createPayment(paymentDetails);
};

export default savePaymentData;

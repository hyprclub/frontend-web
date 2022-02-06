import { db } from "./../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const paymentCollectionsRef = collection(db, "paymentRecords");

export interface paymentDetailsSchema {
  senderUID: string;
  reciepientUID: string;
  timestamp: string;
  transactionSuccess: boolean;
  transactionType: "Creator Support" | "NFT Purchase";
  creatorSupportUID?: string;
  purchasedNftID?: string;
  razorpayOrderData: any;
  // razorpayOrderId: string;
  // currency: string;
  // amount: number | string;
}

const createPayment = async (paymentRef: paymentDetailsSchema) => {
  await addDoc(paymentCollectionsRef, paymentRef);
};

const savePaymentData = (paymentDetails: paymentDetailsSchema) => {
  // const dummyPayment: paymentDetailsSchema = {
  //   senderUID: "stark#12",
  //   reciepientUID: "potts#30",
  //   timestamp: Date().toString(),
  //   transactionSuccess: true,
  //   transactionType: "Creator Support",
  //   creatorSupportUID: "bassi#21",
  //   razorpayOrderId: "asjfbaisufbas",
  // };

  createPayment(paymentDetails);
};

export default savePaymentData;

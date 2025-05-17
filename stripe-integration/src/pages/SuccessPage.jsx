// src/pages/SuccessPage.jsx
import { useEffect } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const SuccessPage = () => {
  useEffect(() => {
    const saveSubscription = async () => {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "subscriptions", user.uid), {
          plan: "Premium", // Replace dynamically later if needed
          subscribedAt: new Date(),
        });
      }
    };
    saveSubscription();
  }, []);

  return <h2>Payment Successful! You're subscribed.</h2>;
};

export default SuccessPage;

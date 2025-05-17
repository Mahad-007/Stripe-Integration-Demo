// src/StripeCheckout.js
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const redirectToCheckout = async (priceId, userId) => {
  const stripe = await stripePromise;

  const res = await fetch("http://localhost:4242/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId, userId }),
  });

  const session = await res.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
};

``; // src/components/Plans.jsx
import React from "react";

const plans = [
  { name: "Basic", price: 10, priceId: "price_basic_id" },
  { name: "Premium", price: 20, priceId: "price_premium_id" },
  { name: "Pro", price: 30, priceId: "price_pro_id" },
];

const Plans = ({ onSubscribe }) => {
  return (
    <div className="plans">
      {plans.map((plan) => (
        <div key={plan.name}>
          <h3>{plan.name}</h3>
          <p>${plan.price}/month</p>
          <button onClick={() => onSubscribe(plan)}>Subscribe</button>
        </div>
      ))}
    </div>
  );
};

export default Plans;

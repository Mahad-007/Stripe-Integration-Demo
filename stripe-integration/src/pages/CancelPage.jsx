// src/pages/CancelPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Cancelled</h2>
      <p style={styles.text}>
        You have cancelled the payment process. No charges were made.
      </p>
      <Link to="/" style={styles.link}>
        Go Back to Plans
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "5rem",
  },
  heading: {
    color: "#ff4d4d",
  },
  text: {
    margin: "1rem 0",
    fontSize: "1.1rem",
  },
  link: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default CancelPage;

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const admin = require('firebase-admin');
const app = express();

app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require('./firebase-service-account.json')),
});
const db = admin.firestore();

app.post('/create-checkout-session', async (req, res) => {
  const { priceId, userId } = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `http://localhost:5173/success`,
    cancel_url: `http://localhost:5173/cancel`,
    metadata: { userId }
  });

  res.send({ id: session.id });
});

// Stripe webhook to handle subscription status (optional)
app.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
  // TODO: Handle Stripe webhook events like invoice.paid, customer.subscription.updated
});

app.listen(4242, () => console.log('Server running on http://localhost:4242'));

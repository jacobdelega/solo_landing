import { NextResponse } from "next/server";
import Stripe from "stripe";
import getRawBody from "raw-body";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    try {
        
        // Check if the request method is POST
        if (req.method !== "POST") {
            return res.status(405).json({ message: "Needs to be a POST request" });
        }

        // Log the incoming request to the console
        console.log("Received POST request to:", req.url);

        // Retrieve the event by verifying the signature using the raw body and secret
        const buf = await getRawBody(req);
        const signature = req.headers["stripe-signature"];

        let event;

        try {
            event = stripe.webhooks.constructEvent(buf, signature, endpointSecret);
        } catch (err) {
            console.error("Webhook signature vertification failed.", err.message);
            return res.status(400);
        }

        //Handle the event
        switch (event.type) {
            case "payment_intent.succeeded":
                const paymentIntent = event.data.object;
                console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);

                // Then define and call a method to handle the successful payment intent.
                // HandlePaymentIntentSucceeded(paymentIntent);
                break;
            case "payment_method.attached":
                const paymentMethod = event.data.object;
                // Then define and call a method to handle the successful attachment of a PaymentMethod.
                // handlePaymentMethodAttached(paymentMethod);
                break;
            default:
                // Unexpected event type
                console.log(`Unhandled event type ${event.type}.`);
        }
        // acknowledge recipt of the event.
        return NextResponse.json({ message: "Received" }, { status: 200 });
    } catch {
        return res.status(400).json({ message: "Webhook Error" });
    }
}

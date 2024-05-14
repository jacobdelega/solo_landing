// Stripe dependencies
import Stripe from "stripe";

// Nextjs
import { NextResponse, NextRequest } from "next/server";

// Resend dependencies
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const processOrder = async (session) => {
    
    // session object
    // console.log(session);

    // Grab data object
    const orderObject = {
        orderId: session.id,
        email: session.customer_details.email,
        name: session.customer_details.name,
        phone: session.customer_details.phone,
        timestamp: new Date(),
    };

    // Function to send email
    const sendEmail = async (email) => {
        try {
            const { data, error } = await resend.emails.send({
                from: "onboarding@resend.dev",
                to: email,
                subject: "Download Your Program!",
                react: EmailTemplate({ firstName: orderObject.name }) as React.ReactElement,
            });

            // Error handling
            if (error) {
                console.error("Error sending email:", error);
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    await sendEmail(orderObject.email);
};

export async function POST(req: NextRequest, res: NextResponse) {
    const payload = await req.text();
    const response = JSON.parse(payload);

    const sig = req.headers.get("Stripe-Signature");

    try {
        let event = stripe.webhooks.constructEvent(payload, sig, process.env.WEBHOOK_SECRET);

        // This is where everything gets handled..
        // for example if event type is charge.succeeeded
        // add function to process email of program to

        if (event.type === "checkout.session.completed") {
            const session = event.data.object;

            return processOrder(session)
                .then(() => NextResponse.json({ status: 200 }))
                .catch(() => NextResponse.json({ status: "Error" }));
        }

        return NextResponse.json({ status: "success", event: event.type });
    } catch (err) {
        return NextResponse.json({ status: "error with webhook" }, err);
    }
}

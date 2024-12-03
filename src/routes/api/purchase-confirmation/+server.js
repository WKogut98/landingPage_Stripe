import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";
import {
  SENDGRID_API_KEY,
  STRIPE_WEBHOOK_SECRET,
  STRIPE_API_KEY,
} from "$env/static/private";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_API_KEY, { apiVersion: "2022-11-15" });

sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL =
  "https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

export async function POST({ request }) {
  const body = await request.text(); // Get the raw body
  const signature = request.headers.get("stripe-signature") || "";

  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_WEBHOOK_SECRET
    );

    const customerEmail = stripeEvent.data.object.customer_details.email;
    const customerName = stripeEvent.customer_details.name;

    const response = await fetch(PDF_GUIDE_URL);
    const pdfBuffer = await response.arrayBuffer();
    const base64Pdf = Buffer.from(pdfBuffer).toString("base64");

    const message ={
        to: customerEmail,
        from: "wojciech.kogut7@gmail.com",
        subject: "Purchase Confirmation",
        html: `
        <h1> Thank you for your purchase! </h1>
        <p>Dear ${customerName}, </p>
        <p>We appreatiate your purchase of the <strong>Complete Spain Relocation Guide</strong><p>
        <p>We hope it'll provide you with all the information you need</p>
        <p>Sincerly,<br/>TSMBC Publishing</p>
        `,
        attachments:[{
            content: base64pdf,
            filename: "Digital Ebbook -Spain relocation.pdf",
            type: "application/pdf",
            disposition: "attachment"
        }]
    };
    await sgMail.send(message);
    return json({ response: "Email sent" });
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }
}
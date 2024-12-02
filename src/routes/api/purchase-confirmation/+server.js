import { json } from '@sveltejs/kit';
import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY } from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL = "https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

export async function POST({request})
{
    const requestBody = await request.json();

    const response = await fetch(PDF_GUIDE_URL);
    const pdfBuffer = await response.arrayBuffer();
    const base64pdf = Buffer.from(pdfBuffer).toString("base64");

    const customerEmail = requestBody.data.object.customer_details.email;
    const customerName = requestBody.data.object.customer_details.name;

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
    return json({response: "Email sent"});
}
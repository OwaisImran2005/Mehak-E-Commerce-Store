import { NextResponse } from 'next/server';
import { menuItemsFromInitialValueTemplateItems } from 'sanity/structure';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2025-01-27.acacia"
});

export async function POST(req: Request) {
    try {
        const { data } = await req.json();

        // Calculate total amount including delivery fee
        const deliveryFee = 500; // $5.00 in cents
        const totalAmount = data.reduce((acc: number, item: any) => acc + item.quantity * item.price_data.unit_amount, 0) + deliveryFee;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: "https://www.google.com/",
            cancel_url: "https://www.fast.com",
            line_items: [
                ...data.map((item: any) => ({
                    quantity: item.quantity,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.name,
                            description: item.description,
                            images: [item.imageUrl], // Add product image to Stripe checkout

                        },
                        unit_amount: item.price_data.unit_amount,
                    },
                })),
                {
                    quantity: 1,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Delivery Fee",
                            description: "Standard delivery",
                        },
                        unit_amount: deliveryFee,
                    },
                },
            ],
        });

        console.log("Session ID :", session.id);
        return NextResponse.json({ sessionId: session.id });
    } catch (err) {
        return NextResponse.json({ err: err });
    }
}
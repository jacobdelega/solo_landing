// route.js
import connectDB from "@utils/db";

export async function GET(req) {
    await connectDB();
    return new Response("Success!")
};

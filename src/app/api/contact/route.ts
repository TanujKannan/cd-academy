import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Here you would typically:
    // 1. Validate the data
    // 2. Send an email notification
    // 3. Store the contact request in a database
    // 4. Send a confirmation email to the user
    
    // For now, we'll just log the data and return a success response
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { message: "Thank you for your message. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "There was an error processing your request. Please try again." },
      { status: 500 }
    );
  }
} 
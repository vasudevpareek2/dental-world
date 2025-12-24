import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, date, time, phone } = body;

    // Validate required fields
    if (!name || !date || !time || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Google Sheets Web App URL
    // Replace this with your Google Apps Script Web App URL
    // See instructions in google-apps-script.js file
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

    if (!GOOGLE_SCRIPT_URL) {
      // If no script URL is configured, log the data (for development)
      console.log("Appointment Data:", { name, date, time, phone });
      return NextResponse.json({
        success: true,
        message: "Appointment data logged (Google Script URL not configured)",
      });
    }

    // Submit to Google Sheets via Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date,
        time,
        phone,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return NextResponse.json({
      success: true,
      message: "Appointment submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting appointment:", error);
    return NextResponse.json(
      { error: "Failed to submit appointment" },
      { status: 500 }
    );
  }
}



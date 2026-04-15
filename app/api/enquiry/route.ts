import { NextResponse } from "next/server";

type EnquiryPayload = {
  studentFirstName: string;
  studentLastName: string;
  yearGroup: string;
  schoolName: string;
  parentFirstName: string;
  parentLastName: string;
  phone: string;
  email: string;
  source: string;
  submittedAt: string;
};

function hasRequiredFields(payload: Partial<EnquiryPayload>) {
  return (
    !!payload.studentFirstName &&
    !!payload.studentLastName &&
    !!payload.yearGroup &&
    !!payload.schoolName &&
    !!payload.parentFirstName &&
    !!payload.parentLastName &&
    !!payload.phone &&
    !!payload.email &&
    !!payload.source
  );
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Server is missing GOOGLE_SHEETS_WEBHOOK_URL." },
      { status: 500 }
    );
  }

  let payload: Partial<EnquiryPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!hasRequiredFields(payload)) {
    return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
  }

  const body: EnquiryPayload = {
    studentFirstName: payload.studentFirstName!.trim(),
    studentLastName: payload.studentLastName!.trim(),
    yearGroup: payload.yearGroup!.trim(),
    schoolName: payload.schoolName!.trim(),
    parentFirstName: payload.parentFirstName!.trim(),
    parentLastName: payload.parentLastName!.trim(),
    phone: payload.phone!.trim(),
    email: payload.email!.trim(),
    source: payload.source!.trim(),
    submittedAt: new Date().toISOString()
  };

  const upstreamResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    cache: "no-store"
  });

  if (!upstreamResponse.ok) {
    return NextResponse.json({ error: "Failed to send submission to Google Sheets." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

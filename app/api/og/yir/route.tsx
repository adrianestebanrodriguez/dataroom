import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { error: "YIR OG image disabled on this deployment." },
    { status: 404 },
  );
}

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Temporary diagnostic: reports ONLY whether required env vars are present
// (never their values) so a broken auth setup can be diagnosed fast.
export async function GET() {
  return NextResponse.json({
    nextauthSecret: !!process.env.NEXTAUTH_SECRET,
    nextauthUrl: process.env.NEXTAUTH_URL || null,
    adminPassword: !!process.env.ADMIN_PASSWORD,
    adminEmail: process.env.ADMIN_EMAIL || null,
    passwordForm: process.env.NEXT_PUBLIC_ENABLE_PASSWORD_AUTH || null,
    google: !!(
      process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ),
    resend: !!process.env.RESEND_API_KEY,
    postgres: !!process.env.POSTGRES_PRISMA_URL,
    postgresDirect: !!process.env.POSTGRES_PRISMA_URL_NON_POOLING,
  });
}

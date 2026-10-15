import { tenant } from "@teamhanko/passkeys-next-auth-provider";

const hankoApiKey = process.env.HANKO_API_KEY || "build-dummy-key";
const hankoTenantId =
  process.env.NEXT_PUBLIC_HANKO_TENANT_ID || "build-dummy-tenant";

if (!process.env.HANKO_API_KEY || !process.env.NEXT_PUBLIC_HANKO_TENANT_ID) {
  // Don't throw at build time (Collecting page data imports this module).
  // Passkeys will fail at runtime until real keys are set in Vercel env.
  console.warn(
    "HANKO_API_KEY / NEXT_PUBLIC_HANKO_TENANT_ID missing, using dummy for build.",
  );
}

const hanko = tenant({
  apiKey: hankoApiKey,
  tenantId: hankoTenantId,
});

export default hanko;

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://f3cc448ea25af090a194dbe6c472c73a@o4506302498996224.ingest.sentry.io/4506302502862848",

  tracesSampleRate: 1.0,
});

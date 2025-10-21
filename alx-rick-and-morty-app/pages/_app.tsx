import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

// 👇 Initialize Sentry
Sentry.init({
  dsn: 'https://e35ebf550215aefb8b86a89c12f6265f@o4510228052508672.ingest.us.sentry.io/4510228054343680', // Replace with your actual DSN from Sentry.io
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // Adjust based on needs (1.0 = 100% of transactions)
});

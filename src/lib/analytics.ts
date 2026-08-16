"use client";

// Observability and Analytics Layer
export const initObservability = () => {
  if (typeof window === "undefined") return;

  const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (sentryDsn) {
    console.log("[Observability] Sentry DSN configured.");
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event: ${eventName}]`, properties);
  }

  if ((window as any).posthog) {
    (window as any).posthog.capture(eventName, properties);
  }
};

export type AnalyticsProperties = Record<string, string | number | boolean>;

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  plausible?: (eventName: string, options?: { props?: AnalyticsProperties }) => void;
};

export function trackEvent(eventName: string, properties: AnalyticsProperties = {}): void {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer?.push({ event: eventName, ...properties });
  analyticsWindow.plausible?.(eventName, { props: properties });
  window.dispatchEvent(
    new CustomEvent("remnant:analytics", {
      detail: { eventName, properties },
    }),
  );
}

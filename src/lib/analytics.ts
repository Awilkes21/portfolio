import { track } from "@vercel/analytics";

type OutboundClickTarget =
  | "contact"
  | "footer_source"
  | "hero"
  | "project_demo"
  | "project_source"
  | "resume";

export function trackOutboundClick(
  target: OutboundClickTarget,
  properties?: Record<string, string>
) {
  track("Outbound Click", {
    target,
    ...properties
  });
}

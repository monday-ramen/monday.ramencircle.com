/* Google Analytics helper
   - Expects NEXT_PUBLIC_GA_ID to be set at build time.
   - Provides small helpers for pageview and event tracking.
*/

// Cast process to any to avoid TypeScript node types dependency in the frontend build.
// Use globalThis to avoid direct reference to `process` which can trigger TS node type errors
export const GA_ID = (globalThis as any)?.process?.env?.NEXT_PUBLIC_GA_ID ?? "";

type GtagEvent = {
    action: string;
    category?: string;
    label?: string;
    value?: number;
};

declare global {
    interface Window {
        dataLayer: any[];
        gtag?: (...args: any[]) => void;
    }
}

export const pageview = (url: string) => {
    if (!GA_ID) return;
    if (typeof window === "undefined") return;
    window.gtag?.("config", GA_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }: GtagEvent) => {
    if (!GA_ID) return;
    if (typeof window === "undefined") return;
    window.gtag?.("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};

export default { GA_ID, pageview, event };

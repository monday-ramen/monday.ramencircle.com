"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import * as gtag from "../lib/gtag";

const GA_ID = (globalThis as any)?.process?.env?.NEXT_PUBLIC_GA_ID || "";

export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (!GA_ID) return;
        // Send initial and subsequent pageviews on client navigation
        gtag.pageview(window.location.pathname + window.location.search);
    }, [pathname]);

    if (!GA_ID) return null;

    return (
        <>
            {/* Load GA script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />

            {/* Initialize gtag */}
            <Script id="gtag-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
            </Script>
        </>
    );
}

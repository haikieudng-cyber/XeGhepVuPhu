"use client";

import { useEffect } from "react";

type DataLayerEvent = {
  event: "ads_phone_click" | "ads_zalo_click" | "ads_route_click";
  cta_location: string;
  route?: string;
  page_path: string;
  href: string;
};

declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

function closestAnchor(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest<HTMLAnchorElement>("a[href]");
}

function closestTrackingNode(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest<HTMLElement>("[data-cta-location], [data-route]");
}

export function AdsConversionTracker() {
  useEffect(() => {
    let lastKey = "";
    let lastPushedAt = 0;

    function pushEvent(payload: DataLayerEvent) {
      const key = `${payload.event}:${payload.href}:${payload.cta_location}:${payload.route ?? ""}`;
      const now = Date.now();

      if (key === lastKey && now - lastPushedAt < 750) return;

      lastKey = key;
      lastPushedAt = now;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
    }

    function handleClick(event: MouseEvent) {
      const anchor = closestAnchor(event.target);
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const trackingNode = closestTrackingNode(event.target);
      const ctaLocation = trackingNode?.dataset.ctaLocation || anchor.dataset.ctaLocation || "unknown";
      const route = trackingNode?.dataset.route || anchor.dataset.route;
      const base = {
        cta_location: ctaLocation,
        route,
        page_path: window.location.pathname,
        href,
      };

      if (href.startsWith("tel:")) {
        pushEvent({ event: "ads_phone_click", ...base });
      }

      if (href.includes("zalo.me")) {
        pushEvent({ event: "ads_zalo_click", ...base });
      }

      if (route) {
        pushEvent({ event: "ads_route_click", ...base });
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}

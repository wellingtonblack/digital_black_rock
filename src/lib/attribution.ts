export interface TouchPoint {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_page: string;
  timestamp: string;
}

const FIRST_KEY = "dbr_first_touch";
const LAST_KEY  = "dbr_last_touch";

function readUtmsFromUrl(): Omit<TouchPoint, "landing_page" | "timestamp"> {
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source:   p.get("utm_source")   ?? undefined,
    utm_medium:   p.get("utm_medium")   ?? undefined,
    utm_campaign: p.get("utm_campaign") ?? undefined,
    utm_content:  p.get("utm_content")  ?? undefined,
    utm_term:     p.get("utm_term")     ?? undefined,
  };
}

export function captureAttribution(): void {
  const utms = readUtmsFromUrl();
  const touch: TouchPoint = {
    ...utms,
    landing_page: window.location.href,
    timestamp: new Date().toISOString(),
  };

  if (!localStorage.getItem(FIRST_KEY)) {
    localStorage.setItem(FIRST_KEY, JSON.stringify(touch));
  }

  const hasUtm = Object.values(utms).some(Boolean);
  if (hasUtm || !localStorage.getItem(LAST_KEY)) {
    localStorage.setItem(LAST_KEY, JSON.stringify(touch));
  }
}

export function getFirstTouch(): TouchPoint | null {
  try {
    const raw = localStorage.getItem(FIRST_KEY);
    return raw ? (JSON.parse(raw) as TouchPoint) : null;
  } catch {
    return null;
  }
}

export function getLastTouch(): TouchPoint | null {
  try {
    const raw = localStorage.getItem(LAST_KEY);
    return raw ? (JSON.parse(raw) as TouchPoint) : null;
  } catch {
    return null;
  }
}

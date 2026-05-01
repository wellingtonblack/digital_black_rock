"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

export default function UtmTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}

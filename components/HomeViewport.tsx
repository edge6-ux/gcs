"use client";

import { useEffect } from "react";

export default function HomeViewport() {
  useEffect(() => {
    document.documentElement.classList.add("home-landing");
    document.body.classList.add("home-landing-body");

    return () => {
      document.documentElement.classList.remove("home-landing");
      document.body.classList.remove("home-landing-body");
    };
  }, []);

  return null;
}

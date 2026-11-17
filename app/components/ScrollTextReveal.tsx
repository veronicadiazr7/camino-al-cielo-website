"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollTextReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("main section :is(h1, h2, h3, p)"),
    ).filter((element) => !element.closest('[aria-roledescription="carousel"], [aria-live]'));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-text-reveal", "visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );

    for (const element of elements) {
      element.setAttribute("data-text-reveal", "pending");
      observer.observe(element);
    }

    const showAll = () => {
      if (!preference.matches) return;
      observer.disconnect();
      elements.forEach((element) => element.removeAttribute("data-text-reveal"));
    };
    preference.addEventListener("change", showAll);

    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      elements.forEach((element) => element.removeAttribute("data-text-reveal"));
    };
  }, [pathname]);

  return null;
}

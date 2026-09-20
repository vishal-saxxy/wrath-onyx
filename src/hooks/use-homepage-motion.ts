import { useEffect } from "react";

const ENTER_BLOCKS = ["shift", "evidence", "movement", "truth", "close"] as const;

export function useHomepageMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const capability = navigator as Navigator & { deviceMemory?: number };
    const lowPower = (navigator.hardwareConcurrency ?? 8) <= 4 || (capability.deviceMemory ?? 8) <= 4;
    root.dataset["motion"] = reduced ? "reduced" : "enhanced";
    root.dataset["power"] = lowPower ? "low" : "full";

    const sections = Array.from(document.querySelectorAll<HTMLElement>(".home-band"));
    const hero = document.querySelector<HTMLElement>(".hero-band");
    const rail = document.querySelector<HTMLElement>(".collapsed-step-rail");
    const consideration = document.querySelector<HTMLElement>(".consideration-band");
    const dimensions = document.querySelector<HTMLElement>(".dimensions-band");
    let geometry: Array<{ element: HTMLElement; top: number; bottom: number }> = [];
    let frame = 0;

    const cacheGeometry = () => {
      geometry = sections.map((element) => ({
        element,
        top: element.offsetTop,
        bottom: element.offsetTop + element.offsetHeight,
      }));
    };

    const updateScrollState = () => {
      frame = 0;
      const scroll = window.scrollY;
      const viewport = window.innerHeight;
      const centre = scroll + viewport * 0.5;
      const current = geometry.findIndex(({ top, bottom }) => centre >= top && centre < bottom);
      const block = Math.max(0, current);
      for (const { element, bottom } of geometry) {
        if (bottom < scroll + viewport) element.dataset["entered"] = "true";
      }
      if (rail) {
        const heroBottom = geometry[0]?.bottom ?? viewport;
        rail.dataset["visible"] = scroll >= heroBottom && block < 9 ? "true" : "false";
        rail.dataset["active"] = block <= 4 ? "measure" : block === 5 ? "diagnose" : block <= 7 ? "fix" : "verify";
      }

      if (!reduced) {
        for (const pinned of [consideration, dimensions]) {
          if (!pinned) continue;
          const entry = geometry.find(({ element }) => element === pinned);
          if (!entry) continue;
          const travel = Math.max(1, entry.bottom - entry.top - viewport);
          const progress = Math.min(1, Math.max(0, (scroll - entry.top) / travel));
          const phase = progress < 0.18 ? 1 : progress < 0.42 ? 2 : 3;
          if (pinned === consideration) {
            const previous = Number(consideration.dataset["selected"] ?? 0);
            if (previous !== phase) {
              consideration.dataset["selected"] = String(phase);
              window.dispatchEvent(new CustomEvent("homepage-consideration-phase", { detail: phase }));
            }
          } else if (dimensions) {
            dimensions.dataset["phase"] = String(phase);
          }
        }
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollState);
    };

    cacheGeometry();
    updateScrollState();

    if (!reduced) {
      hero?.classList.add("hero-running");
      window.setTimeout(() => hero?.classList.add("hero-resting"), 2480);
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const target = entry.target as HTMLElement;
        target.dataset["visible"] = entry.isIntersecting ? "true" : "false";
        if (entry.isIntersecting) target.dataset["entered"] = "true";
      }
    }, { threshold: 0.16 });

    for (const name of ENTER_BLOCKS) {
      const section = document.querySelector<HTMLElement>(`.${name}-band`);
      if (section) observer.observe(section);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", cacheGeometry);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", cacheGeometry);
      if (frame) window.cancelAnimationFrame(frame);
      delete root.dataset["motion"];
      delete root.dataset["power"];
    };
  }, []);
}
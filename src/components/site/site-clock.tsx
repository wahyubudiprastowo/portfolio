"use client";

import { useEffect, useState } from "react";

/** Live Jakarta clock for the footer (POPOLAB-style detail). */
export function SiteClock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    let fmt: Intl.DateTimeFormat;
    try {
      fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    } catch {
      return;
    }
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <span className="ft-clock">
      Jakarta, ID — <b>{now ?? "--:--:--"}</b> WIB
    </span>
  );
}

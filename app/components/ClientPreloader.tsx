"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const PreLoad = dynamic(
  () => import("./Preloader").then((mod) => mod.PreLoad),
  { ssr: false }
);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return !sessionStorage.getItem("preloader_shown");
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

export default function ClientPreloader() {
  const shouldShow = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (!shouldShow) return null;

  return (
    <PreLoad
      onComplete={() => {
        try {
          sessionStorage.setItem("preloader_shown", "true");
        } catch {
          // ignore
        }
        window.dispatchEvent(new Event("storage"));
      }}
    />
  );
}

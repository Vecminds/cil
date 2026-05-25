"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";

export type TweakValues = {
  theme: "light" | "dark";
  headline: string;
  accent: string;
  showIndustries: boolean;
};

const TWEAK_DEFAULTS: TweakValues = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "headline": "The verified credit file that used to take days — ready in minutes.",
  "accent": "mono",
  "showIndustries": true
}/*EDITMODE-END*/;

type TweaksContextType = {
  t: TweakValues;
  setTweak: <K extends keyof TweakValues>(key: K, value: TweakValues[K]) => void;
};

const TweaksContext = createContext<TweaksContextType | null>(null);

export function TweaksProvider({ children }: { children: ReactNode }) {
  const [t, setT] = useState<TweakValues>(TWEAK_DEFAULTS);

  const setTweak = useCallback(<K extends keyof TweakValues>(key: K, value: TweakValues[K]) => {
    setT((prev) => {
      const next = { ...prev, [key]: value };
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
  }, [t.theme]);

  return (
    <TweaksContext.Provider value={{ t, setTweak }}>
      {children}
    </TweaksContext.Provider>
  );
}

export function useTweaks(): TweaksContextType {
  const ctx = useContext(TweaksContext);
  if (!ctx) throw new Error("useTweaks must be used within TweaksProvider");
  return ctx;
}

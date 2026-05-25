"use client";

import { useTweaks } from "./tweaks/tweaks-context";
import Industries from "./industries";

export default function IndustriesSection() {
  const { t } = useTweaks();
  return t.showIndustries ? <Industries /> : null;
}

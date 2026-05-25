"use client";

import { TweaksPanel, TweakSection, TweakRadio, TweakText, TweakToggle } from "./tweaks-panel";
import { useTweaks } from "./tweaks-context";

export default function TweaksWrapper() {
  const { t, setTweak } = useTweaks();
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Theme">
        <TweakRadio
          value={t.theme}
          onChange={(v) => setTweak("theme", v as "light" | "dark")}
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </TweakSection>
      <TweakSection title="Hero headline">
        <TweakText
          value={t.headline}
          onChange={(v) => setTweak("headline", v)}
          placeholder="Headline copy"
        />
      </TweakSection>
      <TweakSection title="Sections">
        <TweakToggle
          label="Show industries"
          value={t.showIndustries}
          onChange={(v) => setTweak("showIndustries", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

"use client";

import { useEffect, useState, type CSSProperties } from "react";

const themes = [
  { id: "mint", label: "海鹽綠", color: "#8ef0d0" },
  { id: "sunset", label: "夕陽橘", color: "#ff8a65" },
  { id: "sky", label: "冰川藍", color: "#67d8ff" },
  { id: "violet", label: "電光紫", color: "#c4a7ff" },
  { id: "lime", label: "青檸黃", color: "#d9f99d" },
] as const;

type ThemeId = (typeof themes)[number]["id"];

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("sunset");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme;
    window.localStorage.setItem("portfolio-theme", activeTheme);
  }, [activeTheme]);

  const selectTheme = (theme: ThemeId) => {
    setActiveTheme(theme);
    setIsOpen(false);
  };

  return (
    <aside className="theme-switcher" aria-label="履歷主色系選擇" data-open={isOpen}>
      <button
        type="button"
        className="theme-trigger"
        aria-label="選擇主色系"
        aria-controls="theme-options"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        style={{ "--swatch": themes.find((theme) => theme.id === activeTheme)?.color } as CSSProperties}
      />
      <span className="theme-switcher-label">THEME</span>
      <div className="theme-options" id="theme-options">
        {themes.map((theme) => (
          <button
            aria-label={`切換為${theme.label}主色系`}
            aria-pressed={activeTheme === theme.id}
            className="theme-swatch"
            key={theme.id}
            onClick={() => selectTheme(theme.id)}
            style={{ "--swatch": theme.color } as CSSProperties}
            title={theme.label}
            type="button"
          />
        ))}
      </div>
    </aside>
  );
}

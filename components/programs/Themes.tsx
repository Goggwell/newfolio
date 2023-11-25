"use client";

import { useTheme } from "next-themes";
import { MouseEventHandler } from "react";

const themesData = [{ name: "light" }, { name: "dark" }];

export interface IThemeItem {
  themeName: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  value: string;
}

const ThemeItem = ({ themeName, onClick, value }: IThemeItem) => {
  return (
    <button
      aria-label={themeName}
      type="button"
      onClick={onClick}
      value={value}
      className="bg-programOutline border-none text-themeTitle m-0 text-sm py-[5px] px-[10px] hover:bg-transparent hover:text-programOutline transition-colors"
    >
      {themeName}
    </button>
  );
};

export const ThemesProgram = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="flex flex-col items-center gap-2.5">
      <h3 className="text-text">select theme</h3>
      {themesData.map((theme) => (
        <ThemeItem
          themeName={theme.name}
          key={theme.name}
          value={theme.name}
          onClick={(e) => setTheme(e.currentTarget.value)}
        />
      ))}
    </section>
  );
};

import { useThemeStore } from "@/store/ThemeStore";
import clsx from "clsx";
import { ReactNode } from "react";

type ThemeProviderProps = {
	children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	const theme = useThemeStore((state) => state.theme);

	return (
		<main data-theme={theme} className={clsx(theme)}>
			{children}
		</main>
	);
}

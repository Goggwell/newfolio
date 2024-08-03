import { useThemeStore } from "@/store/ThemeStore";
import clsx from "clsx";
import { ReactNode } from "react";

type ThemeProviderProps = {
	children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	const theme = useThemeStore((state) => state.theme);
	const scheme = useThemeStore((state) => state.scheme);

	return (
		<main data-theme={theme} className={clsx(scheme)}>
			{children}
		</main>
	);
}

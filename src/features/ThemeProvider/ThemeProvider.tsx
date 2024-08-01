import clsx from "clsx";
import { ReactNode } from "react";

type ThemeProviderProps = {
	children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	return <main className={clsx("dark")}>{children}</main>;
}

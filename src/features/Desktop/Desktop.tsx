import { ReactNode } from "react";

type DesktopProps = {
	children: ReactNode;
};

export function Desktop({ children }: DesktopProps) {
	return (
		<section className="h-dvh w-dvh bg-primary relative">{children}</section>
	);
}

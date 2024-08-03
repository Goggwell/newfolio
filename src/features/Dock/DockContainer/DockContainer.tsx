import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type DockContainerProps = {
	className?: string;
	children: ReactNode;
};

export function DockContainer({ className, children }: DockContainerProps) {
	return (
		<article
			className={cn("w-full grid place-items-center relative", className)}
		>
			{children}
		</article>
	);
}

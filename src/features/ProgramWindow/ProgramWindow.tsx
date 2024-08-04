import { useDraggable } from "@/hooks/useDraggable";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type ProgramWindowProps = {
	className?: string;
	children: ReactNode;
};

export function ProgramWindow({ className, children }: ProgramWindowProps) {
	const { ref, style, handleMouseDown } = useDraggable();

	return (
		<dialog
			className={cn(
				"absolute w-[400px] h-[400px] bg-white rounded-lg shadow-xl -translate-1/2",
				className,
			)}
			ref={ref}
			style={style.value}
			onMouseDown={handleMouseDown}
			open
		>
			{children}
		</dialog>
	);
}

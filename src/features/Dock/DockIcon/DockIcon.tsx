import { DockContext } from "@/contexts/DockContext";
import { cn } from "@/utils/cn";
import { motion, useSpring, useTransform } from "framer-motion";
import { PropsWithChildren, ReactNode, useContext, useRef } from "react";

type DockIconProps = {
	size?: number;
	magnification?: number;
	distance?: number;
	className?: string;
	children: ReactNode;
	props?: PropsWithChildren;
};

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const DEFAULT_SIZE = 40;

export function DockIcon({
	className,
	size = DEFAULT_SIZE,
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	children,
	...props
}: DockIconProps) {
	const ref = useRef<HTMLDivElement>(null);
	const mouseX = useContext(DockContext);

	const distanceCalc = useTransform(mouseX!, (val: number) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	let widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[size, magnification, size],
	);

	let width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 125,
		damping: 18,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width }}
			className={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-full",
				className,
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

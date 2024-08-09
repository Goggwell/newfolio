import { DockContext } from "@/contexts/DockContext";
import { cn } from "@/utils/cn";
import { LazyMotion, m, useSpring, useTransform } from "framer-motion";
import { PropsWithChildren, ReactNode, useMemo, useRef } from "react";
import { useContextSelector } from "use-context-selector";

const loadFramerFeatures = () =>
	import("@/utils/framerFeatures").then((res) => res.default);

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
	const mouseX = useContextSelector(DockContext, (v) => v);

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
		mass: 1,
		stiffness: 300,
		damping: 20,
	});

	const memoizedStyle = useMemo(() => ({ width: width }), [width]);

	return (
		<LazyMotion strict features={loadFramerFeatures}>
			<m.div
				ref={ref}
				style={memoizedStyle}
				className={cn(
					"flex aspect-square cursor-pointer items-center justify-center rounded-full",
					className,
				)}
				{...props}
			>
				{children}
			</m.div>
		</LazyMotion>
	);
}

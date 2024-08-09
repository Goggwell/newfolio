import { DockContext } from "@/contexts/DockContext";
import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";
import { LazyMotion, m, useMotionValue } from "framer-motion";
import { ReactNode, forwardRef } from "react";

const loadFramerFeatures = () =>
	import("@/utils/framerFeatures").then((res) => res.default);

const dockVariants = cva("h-[58px] p-2 flex gap-2 rounded-2xl bg-secondary");

type DockProps = {
	className?: string;
	direction?: "top" | "middle" | "bottom";
	children: ReactNode;
} & VariantProps<typeof dockVariants>;

export const Dock = forwardRef<HTMLDivElement, DockProps>(function Dock(
	{ className, children, direction = "bottom", ...props },
	ref,
) {
	const mouseX = useMotionValue(Infinity);

	return (
		<DockContext.Provider value={mouseX}>
			<LazyMotion strict features={loadFramerFeatures}>
				<m.div
					ref={ref}
					onMouseMove={(e) => mouseX.set(e.pageX)}
					onMouseLeave={() => mouseX.set(Infinity)}
					{...props}
					className={cn(dockVariants({ className }), {
						"items-start": direction === "top",
						"items-center": direction === "middle",
						"items-end": direction === "bottom",
					})}
				>
					{children}
				</m.div>
			</LazyMotion>
		</DockContext.Provider>
	);
});

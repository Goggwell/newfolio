import { TitleBarButton } from "@/components/TitleBarButton";
import { cn } from "@/utils/cn";
import { LazyMotion, m, useDragControls } from "framer-motion";
import React, { ReactNode } from "react";

const loadFramerFeatures = () =>
	import("@/utils/framerFeatures").then((res) => res.default);

type ProgramWindowProps = {
	className?: string;
	children: ReactNode;
};

export function ProgramWindow({ className, children }: ProgramWindowProps) {
	const controls = useDragControls();

	function startDrag(e: React.PointerEvent) {
		controls.start(e);
	}

	return (
		<LazyMotion strict features={loadFramerFeatures}>
			<m.dialog
				className={cn(
					"absolute w-[400px] h-[400px] shadow-xl bg-transparent rounded-b-lg",
					className,
				)}
				open
				drag
				dragMomentum={false}
				dragControls={controls}
				dragListener={false}
				dragConstraints={{
					top: 20,
					left: 0,
					right: window.innerWidth - 400,
					bottom: window.innerHeight - 400,
				}}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
				initial={{
					x: window.innerWidth / 2 - 200,
					y: window.innerHeight / 2 - 200,
				}}
			>
				<m.div
					className="absolute -top-7 left-0 w-full backdrop-blur-sm flex items-center gap-2 z-1 p-2 bg-secondary/10 rounded-t-lg opacity-0 hover:opacity-100 transition-opacity duration-250"
					onPointerDown={startDrag}
				>
					<TitleBarButton buttonType="close" />
					<TitleBarButton buttonType="minimize" />
					<TitleBarButton buttonType="maximize" />
				</m.div>
				{children}
			</m.dialog>
		</LazyMotion>
	);
}

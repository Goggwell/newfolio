import { useComputed, useSignal } from "@preact/signals-react";
import React, { useCallback, useRef } from "react";

type Position = { x: number; y: number };

export function useDraggable() {
	const pos = useSignal<Position>({
		x: 0,
		y: 0,
	});
	const dragging = useSignal(false);
	const ref = useRef<HTMLDialogElement>(null);
	const startPosRef = useRef<Position>({ x: 0, y: 0 });

	const handleMove = useCallback(
		(e: MouseEvent | TouchEvent) => {
			const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
			const clientY = "clientY" in e ? e.clientY : e.touches[0].clientY;
			pos.value = {
				x: clientX - startPosRef.current.x,
				y: clientY - startPosRef.current.y,
			};
		},
		[pos],
	);

	const handleEnd = useCallback(() => {
		dragging.value = false;
		document.removeEventListener("mousemove", handleMove);
		document.removeEventListener("mouseup", handleEnd);
		document.removeEventListener("touchmove", handleMove);
		document.removeEventListener("touchend", handleEnd);
	}, [handleMove, dragging]);

	const handleMouseDown = useCallback(
		(e: React.MouseEvent | React.TouchEvent) => {
			if (ref.current) {
				dragging.value = true;
				const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;
				const clientY = "clientY" in e ? e.clientY : e.touches[0].clientY;
				startPosRef.current = {
					x: clientX - pos.value.x,
					y: clientY - pos.value.y,
				};

				document.addEventListener("mousemove", handleMove);
				document.addEventListener("mouseup", handleEnd);
				document.addEventListener("touchmove", handleMove);
				document.addEventListener("touchend", handleEnd);
			}
		},
		[handleMove, handleEnd, dragging, pos],
	);

	const style = useComputed(() => ({
		transform: `translate(${pos.value.x}px, ${pos.value.y}px)`,
		cursor: dragging.value ? "grabbing" : "grab",
		userSelect: "none" as const,
	}));

	return { ref, style, pos, dragging, handleMouseDown };
}

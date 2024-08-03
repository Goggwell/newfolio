import { computed, signal } from "@preact/signals-react";
import React, { useCallback, useRef } from "react";

type Position = { x: number; y: number };

export const pos = signal<Position>({
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
});
export const dragging = signal(false);

export function useDraggable() {
	const ref = useRef<HTMLDialogElement>(null);

	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		if (ref.current) {
			dragging.value = true;
			const startX = e.clientX - pos.value.x;
			const startY = e.clientY - pos.value.y;

			const handleMouseMove = (e: MouseEvent) => {
				pos.value = {
					x: e.clientX - startX,
					y: e.clientY - startY,
				};
			};

			const handleMouseUp = () => {
				dragging.value = false;
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseup", handleMouseUp);
			};

			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		}
	}, []);

	const style = computed(() => ({
		left: `${pos.value.x}px`,
		top: `${pos.value.y}px`,
		cursor: dragging ? "grabbing" : "grab",
		userSelect: "none" as const,
	}));

	return { ref, style, pos, dragging, handleMouseDown };
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ClassName utility function
 * @param inputs - classes to merge
 * @returns merged class names
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

import { Palette } from "lucide-react";
import { FC, JSX, lazy } from "react";

const ThemeSwitcher = lazy(() =>
	import("@/features/Programs/ThemeSwitcher").then((mod) => ({
		default: mod.ThemeSwitcher,
	})),
);

type ProgramType = {
	id: number;
	name: string;
	program: FC;
	icon: JSX.Element;
};

export const programsList: ProgramType[] = [
	{
		id: 1,
		name: "Theme Switcher",
		program: ThemeSwitcher,
		icon: <Palette size={20} />,
	},
];

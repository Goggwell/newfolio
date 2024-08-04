import { MonitorCog, Moon, Sun } from "lucide-react";
import { JSX } from "react";

type ColorScheme = {
	id: number;
	name: string;
	value: string;
	icon: JSX.Element;
};

export const colorSchemeList: ColorScheme[] = [
	{
		id: 1,
		name: "Light",
		value: "light",
		icon: <Sun size={20} />,
	},
	{
		id: 2,
		name: "Dark",
		value: "dark",
		icon: <Moon size={20} />,
	},
	{
		id: 3,
		name: "System",
		value: "",
		icon: <MonitorCog size={20} />,
	},
];

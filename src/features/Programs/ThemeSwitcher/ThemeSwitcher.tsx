import { colorSchemeList } from "@/constants/colorSchemeList";
import { themesList } from "@/constants/themesList";
import { useThemeStore } from "@/store/ThemeStore";
import { cn } from "@/utils/cn";

export function ThemeSwitcher() {
	const { theme, scheme, setTheme, setScheme } = useThemeStore();

	return (
		<div className="w-full h-full relative flex flex-col gap-2 p-2 bg-primary text-secondary rounded-b-lg">
			<div className="flex items-center gap-2">
				{colorSchemeList.map((colorScheme) => (
					<button
						key={colorScheme.id}
						className={cn(
							"w-fit h-fit rounded-lg p-2 relative cursor-pointer hover:bg-secondary/10 transition-colors duration-100",
							{
								"bg-secondary/10": colorScheme.value === scheme,
							},
						)}
						onClick={() => setScheme(colorScheme.value)}
					>
						{colorScheme.icon}
					</button>
				))}
			</div>
			<div
				className="grid gap-2 relative"
				style={{ gridTemplateColumns: "repeat(auto-fill, minmax(0, 8em))" }}
			>
				{themesList.map((colorTheme) => (
					<button
						key={colorTheme.id}
						className={cn(
							"w-full h-full p-2 rounded-lg relative cursor-pointer hover:bg-secondary/10 transition-colors duration-100",
							{
								"bg-secondary/10": colorTheme.value === theme,
							},
						)}
						onClick={() => setTheme(colorTheme.value)}
					>
						<h2 className="text-lg text-center">{colorTheme.name}</h2>
					</button>
				))}
			</div>
		</div>
	);
}

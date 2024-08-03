import { Desktop } from "@/features/Desktop";
import { Dock } from "@/features/Dock";
import { DockContainer } from "@/features/Dock/DockContainer";
import { DockIcon } from "@/features/Dock/DockIcon";
import { useThemeStore } from "@/store/ThemeStore";
import { signal } from "@preact/signals-react";
import viteLogo from "/vite.svg";

const count = signal(0);

function App() {
	const inc = () => count.value++;
	const setTheme = useThemeStore((state) => state.setTheme);

	return (
		<Desktop>
			<h1 className="text-3xl font-mono underline text-secondary">
				Vite + React
			</h1>
			<div className="card">
				<button
					onClick={() => {
						inc();
						setTheme("ner");
					}}
				>
					<>count is {count}</>
				</button>
			</div>
			<DockContainer className="fixed p-8 bottom-0 left-1/2 -translate-x-1/2 z-10">
				<Dock direction="middle">
					{Array.from({ length: 5 }).map((_, i) => (
						<DockIcon key={i} size={50} magnification={75}>
							<img src={viteLogo} className="size-6" alt="Vite logo" />
						</DockIcon>
					))}
				</Dock>
			</DockContainer>
		</Desktop>
	);
}

export default App;

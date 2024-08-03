import { Desktop } from "@/features/Desktop";
import { useThemeStore } from "@/store/ThemeStore";
import { signal } from "@preact/signals-react";

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
		</Desktop>
	);
}

export default App;

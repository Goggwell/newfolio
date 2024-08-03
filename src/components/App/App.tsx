import reactLogo from "@/assets/react.svg";
import { useThemeStore } from "@/store/ThemeStore";
import { signal } from "@preact/signals-react";
import viteLogo from "/vite.svg";

const count = signal(0);

function App() {
	const inc = () => count.value++;
	const setTheme = useThemeStore((state) => state.setTheme);

	return (
		<div className="bg-primary h-dvh w-dvw">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
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
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;

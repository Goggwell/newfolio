import reactLogo from "@/assets/react.svg";
import { useThemeStore } from "@/store/ThemeStore";
import { Signal, useSignal } from "use-signals";
import viteLogo from "/vite.svg";

const counter = new Signal.State(0);

function App() {
	const count = useSignal(counter);
	const inc = () => counter.set(counter.get() + 1);
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
						setTheme("");
					}}
				>
					count is {count}
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

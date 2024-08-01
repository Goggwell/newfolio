import reactLogo from "@/assets/react.svg";
import { Signal, useSignal } from "use-signals";
import viteLogo from "/vite.svg";
import "./App.css";

const counter = new Signal.State(0);

function App() {
	const count = useSignal(counter);
	const inc = () => counter.set(counter.get() + 1);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-3xl font-mono underline">Vite + React</h1>
			<div className="card">
				<button onClick={inc}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;

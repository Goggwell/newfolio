import { programsList } from "@/constants/programsList";
import { Desktop } from "@/features/Desktop";
import { Dock } from "@/features/Dock";
import { DockContainer } from "@/features/Dock/DockContainer";
import { DockIcon } from "@/features/Dock/DockIcon";
import { Suspense, lazy } from "react";
import viteLogo from "/vite.svg";

const ProgramWindow = lazy(() =>
	import("@/features/ProgramWindow").then((mod) => ({
		default: mod.ProgramWindow,
	})),
);

function App() {
	return (
		<Desktop>
			{programsList.map((program) => (
				<Suspense fallback={<div>Loading...</div>} key={program.id}>
					<ProgramWindow>
						<program.program />
					</ProgramWindow>
				</Suspense>
			))}
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

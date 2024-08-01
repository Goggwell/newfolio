import { withStorageDOMEvents } from "@/hooks/withStorageDOMEvents";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const STORAGE_KEY = "theme-storage";

type ThemeStoreState = {
	theme: string;
	scheme: string;
	setTheme: (theme: string) => void;
	setScheme: (scheme: string) => void;
};

export const useThemeStore = create<ThemeStoreState>()(
	persist(
		immer((set) => ({
			theme: "",
			scheme: "",
			setTheme: (newTheme) => set({ theme: newTheme }),
			setScheme: (newScheme) => set({ scheme: newScheme }),
		})),
		{
			name: STORAGE_KEY,
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ theme: state.theme }),
		},
	),
);

withStorageDOMEvents(useThemeStore);

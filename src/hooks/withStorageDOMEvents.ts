import { Mutate, StoreApi } from "zustand";

type StoreWithPersist<T> = Mutate<StoreApi<T>, [["zustand/persist", unknown]]>;

export const withStorageDOMEvents = <T>(store: StoreWithPersist<T>) => {
	const storageEventCallback = (e: StorageEvent) => {
		if (e.key === store.persist.getOptions().name && e.newValue) {
			store.persist.rehydrate();
		}
	};

	window.addEventListener("storage", storageEventCallback);

	return () => {
		window.removeEventListener("storage", storageEventCallback);
	};
};

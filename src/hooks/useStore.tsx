import { StoreContext } from "@/store/store";
import type { StoreState } from "@/types/store";
import { useContext } from "react";

export const useStore = (): StoreState => {
	const ctx = useContext(StoreContext);
	if (ctx === undefined)
		throw Error("useStore must be used within a StoreProvider");
	return ctx;
};

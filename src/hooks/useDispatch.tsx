import { StoreDispatchContext } from "@/store/store";
import type { StoreActions } from "@/types/store";
import { useContext } from "react";

export const useDispatch = (): React.Dispatch<StoreActions> => {
	const ctx = useContext(StoreDispatchContext);
	if (ctx === undefined)
		throw Error("useDispatch must be used within a StoreProvider");
	return ctx;
};

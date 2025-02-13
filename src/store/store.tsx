import type { StoreActions, StoreState } from "@/types/store";
import { createContext } from "react";

export const initialStoreState: StoreState = {
	chiefGear: {
		Helmet: {
			gearTier: "Green",
			gearLevel: {
				level: 1,
				stats: 9.35,
			},
		},
	},
	city: {
		furnace: 1,
	},
	facilities: {
		Construction: [],
		Defense: [],
		Expedition: [],
		Gathering: [],
		Production: [],
		Tech: [],
		Training: [],
		Weapons: [],
	},
};

export const StoreDispatchContext = createContext<
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	React.Dispatch<StoreActions> | any
>(undefined);
export const StoreContext = createContext<StoreState>(initialStoreState);

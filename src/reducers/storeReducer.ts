import { DEBUG } from "@/constants";
import type { StoreActions, StoreState } from "@/types/store";

export const storeReducer = (
	state: StoreState,
	action: StoreActions,
): StoreState => {
	if (DEBUG) console.log(action);

	const clone = structuredClone(state);

	switch (action.type) {
		case "CITY/SET/FURNACE": {
			return {
				...clone,
				city: {
					...clone.city,
					furnace: action.payload,
				},
			};
		}
		case "FACILITY/SET": {
			const { facility, level, value } = action.payload;
			console.log(facility, level, value);
			if (value) {
				clone.facilities[facility] = [
					...(clone.facilities[facility] ?? []),
					level,
				];
			} else {
				clone.facilities[facility] = clone.facilities[facility]?.filter(
					(l) => l !== level,
				);
			}
			return clone;
		}
		default: {
			return clone;
		}
	}
};

import { DEBUG } from "@/constants";
import { ChiefGearLevelList } from "@/types/gear";
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
		case "GEAR/SELECT": {
			const { type, tier } = action.payload;
			const gear = ChiefGearLevelList[tier];

			if (!gear) {
				console.error(`Invalid gear tier: ${tier}`);
				return state;
			}

			clone.chiefGear[type] = {
				gearLevel: gear.stars[0],
				gearTier: tier,
			};

			return clone;
		}
		default: {
			return state;
		}
	}
};

import { z } from "zod";
import type { ChiefGearItemType, ChiefGearPartType } from "./gear";
import { ChiefGearPartsListSchema } from "./gear";
import { FacilitiesNamesEnum } from "./facility";
import type { FacilitiesNames } from "./facility";

export const StoreSchema = z.object({
	city: z.object({
		furnace: z.number().int().min(1).max(30),
	}),
	chiefGear: ChiefGearPartsListSchema,
	facilities: z.record(
		FacilitiesNamesEnum,
		z.array(z.number().int().min(1).max(4)),
	),
});

export type StoreState = z.infer<typeof StoreSchema>;

export type ActionFurnace = {
	type: "CITY/SET/FURNACE";
	payload: number;
};

export type ActionGearSelect = {
	type: "GEAR/SELECT";
	payload: {
		tier: ChiefGearPartType;
		type: ChiefGearItemType;
	};
};

export type ActionFacilitySet = {
	type: "FACILITY/SET";
	payload: {
		facility: FacilitiesNames;
		level: number;
		value: boolean;
	};
};

export type StoreActions = ActionFurnace | ActionFacilitySet | ActionGearSelect;

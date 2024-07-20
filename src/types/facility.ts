import { z } from "zod";

export const FacilityBonusType = z.enum([
	"construction_speed",
	"troops_defense",
	"marching_speed",
	"resources_gathering",
	"resources_production",
	"research_speed",
	"training_troops",
	"troops_attack",
]);

export const FacilitySchema = z.object({
	name: z.string(),
	booster: z.array(
		z.object({
			level: z.number().int(),
			bonus: z.number().int(),
		}),
	),
	type: FacilityBonusType,
});

export type Facility = z.infer<typeof FacilitySchema>;

export const facilities: Facility[] = [
	{
		name: "Construction",
		booster: [
			{
				bonus: 5,
				level: 1,
			},
			{
				bonus: 8,
				level: 3,
			},
		],
		type: "construction_speed",
	},
	{
		name: "Defense",
		booster: [
			{
				bonus: 5,
				level: 2,
			},
			{
				bonus: 8,
				level: 4,
			},
		],
		type: "troops_defense",
	},
	{
		name: "Expedition",
		booster: [
			{
				bonus: 15,
				level: 3,
			},
		],
		type: "marching_speed",
	},
	{
		name: "Gathering",
		booster: [
			{
				bonus: 5,
				level: 1,
			},
		],
		type: "resources_gathering",
	},
	{
		name: "Production",
		booster: [
			{
				bonus: 5,
				level: 1,
			},
		],
		type: "resources_production",
	},
	{
		name: "Tech",
		booster: [
			{
				bonus: 5,
				level: 1,
			},
			{
				bonus: 8,
				level: 3,
			},
		],
		type: "research_speed",
	},
	{
		name: "Training",
		booster: [
			{
				bonus: 5,
				level: 2,
			},
		],
		type: "training_troops",
	},
	{
		name: "Weapons",
		booster: [
			{
				bonus: 5,
				level: 2,
			},
			{
				bonus: 8,
				level: 4,
			},
		],
		type: "marching_speed",
	},
] as const;

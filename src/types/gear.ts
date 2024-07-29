import { z } from "zod";

export const ChiefGearPartTypeSchema = z.enum([
	"Green",
	"Blue",
	"Purple",
	"Purple T1",
	"Gold",
	"Gold T1",
	"Gold T2",
	"Red",
	"Red T1",
	"Red T2",
	"Red T3",
]);

export type ChiefGearPartType = z.infer<typeof ChiefGearPartTypeSchema>;

export const ChiefGearPartList: ChiefGearPartType[] = [
	"Green",
	"Blue",
	"Purple",
	"Purple T1",
	"Gold",
	"Gold T1",
	"Gold T2",
	"Red",
	"Red T1",
	"Red T2",
	"Red T3",
];

export const ChiefGearStarSchema = z.number().int().min(0).max(3);
export const ChiefGearCharmLevelSchema = z.number().int().min(1).max(11);

export const ChiefGearCharmSchema = z.object({
	level: ChiefGearCharmLevelSchema,
	stats: z.number().int(),
});

export const ChiefGearLevelSchema = z.object({
	level: ChiefGearStarSchema,
	stats: z.number().int(),
});

export const ChiefGearSchema = z.object({
	stars: z.array(ChiefGearLevelSchema),
});

export type ChiefGear = z.infer<typeof ChiefGearSchema>;

export const ChiefGearListSchema = z.record(
	ChiefGearPartTypeSchema,
	ChiefGearSchema,
);

export type ChiefGearListType = z.infer<typeof ChiefGearListSchema>;

export const ChiefGearItemTypeEnum = z.enum([
	"Helmet",
	"Chest",
	"Ring",
	"Watch",
	"Leggins",
	"Weapon",
]);

export type ChiefGearItemType = z.infer<typeof ChiefGearItemTypeEnum>;

export const ChiefGearPartSchema = z.object({
	gearTier: ChiefGearPartTypeSchema,
	gearLevel: ChiefGearLevelSchema,
});

export type ChiefGearPart = z.infer<typeof ChiefGearPartSchema>;

export const ChiefGearPartsListSchema = z.record(
	ChiefGearItemTypeEnum,
	ChiefGearPartSchema,
);

export type ChiefGearPartsListType = z.infer<typeof ChiefGearPartsListSchema>;

export const ChiefGearLevelList: ChiefGearListType = {
	Green: {
		stars: [
			{
				level: 0,
				stats: 9.35,
			},
			{
				level: 1,
				stats: 12.75,
			},
		],
	},
	Blue: {
		stars: [
			{
				level: 0,
				stats: 17,
			},
			{
				level: 1,
				stats: 21.25,
			},
			{
				level: 2,
				stats: 25.5,
			},
			{
				level: 3,
				stats: 29.75,
			},
		],
	},
	Purple: {
		stars: [
			{
				level: 0,
				stats: 34,
			},
			{
				level: 1,
				stats: 36.89,
			},
			{
				level: 2,
				stats: 39.78,
			},
			{
				level: 3,
				stats: 42.67,
			},
		],
	},
	"Purple T1": {
		stars: [
			{
				level: 0,
				stats: 45.56,
			},
			{
				level: 1,
				stats: 51.34,
			},
			{
				level: 2,
				stats: 54.23,
			},
			{
				level: 3,
				stats: 54.23,
			},
		],
	},
	Gold: {
		stars: [
			{
				level: 0,
				stats: 56.78,
			},
			{
				level: 1,
				stats: 59.33,
			},
			{
				level: 2,
				stats: 61.88,
			},
			{
				level: 3,
				stats: 64.43,
			},
		],
	},
	"Gold T1": {
		stars: [
			{
				level: 0,
				stats: 66.98,
			},
			{
				level: 1,
				stats: 69.53,
			},
			{
				level: 2,
				stats: 72.08,
			},
			{
				level: 3,
				stats: 74.63,
			},
		],
	},
	"Gold T2": {
		stars: [
			{
				level: 0,
				stats: 77.18,
			},
			{
				level: 1,
				stats: 79.73,
			},
			{
				level: 2,
				stats: 82.28,
			},
			{
				level: 3,
				stats: 85,
			},
		],
	},
	Red: {
		stars: [
			{
				level: 0,
				stats: 89.25,
			},
			{
				level: 1,
				stats: 93.5,
			},
			{
				level: 2,
				stats: 97.75,
			},
			{
				level: 3,
				stats: 102,
			},
		],
	},
	"Red T1": {
		stars: [
			{
				level: 0,
				stats: 106.25,
			},
			{
				level: 1,
				stats: 110.5,
			},
			{
				level: 2,
				stats: 114.75,
			},
			{
				level: 3,
				stats: 119,
			},
		],
	},
	"Red T2": {
		stars: [
			{
				level: 0,
				stats: 123.25,
			},
			{
				level: 1,
				stats: 127.5,
			},
			{
				level: 2,
				stats: 131.75,
			},
			{
				level: 3,
				stats: 136,
			},
		],
	},
	"Red T3": {
		stars: [
			{
				level: 0,
				stats: 140.25,
			},
			{
				level: 1,
				stats: 144.5,
			},
			{
				level: 2,
				stats: 148.75,
			},
			{
				level: 3,
				stats: 153,
			},
		],
	},
};

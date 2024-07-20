import { z } from "zod";
import { SubSkillTypeEnum } from "./subskill";

export const HeroClassSchema = z.enum(["Infantry", "Lancer", "Marksman"]);
export const HeroSubClassSchema = z.enum(["Growth", "Combat"]);
export const HeroTypeEnum = z.enum(["Rare", "Epic", "Generation 1"]);

export type HeroType = z.infer<typeof HeroTypeEnum>;

export const SubSkillSchema = z.object({
	name: SubSkillTypeEnum,
	upgradeValues: z.array(z.number()),
});

export type SubSkill = z.infer<typeof SubSkillSchema>;

export const HeroSkillSchema = z.object({
	name: z.string(),
	icon: z.string(),
	level: z.number(),
	description: z.string(),
	subSkill: z.array(SubSkillSchema),
});

export type HeroSkill = z.infer<typeof HeroSkillSchema>;

export const HeroSkillsSchema = z.object({
	exploration: z.array(HeroSkillSchema),
	expedition: z.array(HeroSkillSchema),
});

export type HeroSkills = z.infer<typeof HeroSkillsSchema>;

export const HeroSchema = z.object({
	id: z.string(),
	name: z.string(),
	type: HeroTypeEnum,
	class: HeroClassSchema,
	subClass: HeroSubClassSchema,
	skills: HeroSkillsSchema,
	heroModel: z.string(),
	assets: z.array(z.string()).optional(),
});

export type Hero = z.infer<typeof HeroSchema>;

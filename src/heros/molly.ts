import { createSubSkill } from "@/skills/subskills";
import type { Hero } from "../types/hero";
import { heroModelPath, skillIconPath } from "@/lib/utils";

export const HeroMolly: Hero = {
	id: "molly",
	name: "Molly",
	type: "Generation 1",
	class: "Lancer",
	heroModel: heroModelPath("molly.png"),
	skills: {
		exploration: [
			{
				description:
					"Molly launches a Super Snowball which plops down to deal Attack *{value}% Area of Effect Damage and freezes them for 1.5s.",
				level: 1,
				icon: skillIconPath("super_snowball.png"),
				name: "Super Snowball",
				subSkill: [
					createSubSkill("Area of Effect Damage Up", [180, 198, 216, 234, 252]),
				],
			},
			{
				name: "Frost Ambush",
				description:
					"Molly ambushes the enemy with her great camouflage skills, dealing Attack *{value}% damage.",
				icon: skillIconPath("frost_ambush.png"),
				level: 1,
				subSkill: [createSubSkill("Damage Up", [150, 165, 180, 195, 210])],
			},
			{
				name: "Youthful Persistence",
				description: "",
				icon: skillIconPath("youthful_persistence.png"),
				level: 1,
				subSkill: [createSubSkill("Attack Speed Up", [20, 30, 40, 50, 60])],
			},
		],
		expedition: [
			{
				name: "Calling of the Snow",
				description:
					"Molly leads a charge as overwhelming as an avalanche, granting all troop's attack a +4%/8%/12%/16%/20% chance of stunning enemies for 1 turn.",
				level: 1,
				icon: skillIconPath("calling_of_the_snow.png"),
				subSkill: [
					{
						name: "Stun Chance",
						upgradeValues: [4, 8, 12, 16, 20],
					},
				],
			},
			{
				name: "Ice Dominion",
				description:
					"Molly excels in snowy terrains, granting all troops' attack a 50% chance of increasing damage dealt by +10%/20%/30%/40%/50%.",
				level: 1,
				icon: skillIconPath("ice_dominion.png"),
				subSkill: [createSubSkill("Damage Up", [10, 20, 30, 40, 50])],
			},
			{
				name: "Youthful Rage",
				description:
					"Hell hath no fury like an angry Molly. Increasing damage dealt by +{value}% damage.",
				level: 1,
				icon: skillIconPath("youthful_rage.png"),
				subSkill: [createSubSkill("Damage Up", [5, 10, 15, 20, 25])],
			},
		],
	},
	subClass: "Growth",
	assets: ["/assets/heroes/molly.PNG"],
};

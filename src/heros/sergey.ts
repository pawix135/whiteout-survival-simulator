import { createSubSkill } from "@/skills/subskills";
import type { Hero } from "../types/hero";
import { heroModelPath, skillIconPath } from "@/lib/utils";

export const HeroSergey: Hero = {
	id: "sergey-hero",
	name: "Sergey",
	type: "Epic",
	class: "Infantry",
	heroModel: heroModelPath("sergey.png"),
	skills: {
		exploration: [
			{
				name: "Shielded Strike",
				description:
					"Sergey gives an enemy a solid whack with his heavy shield, knocking the target back while dealing Attack *{value}% Area of Effect damage.",
				level: 1,
				icon: skillIconPath("shielded_strike.png"),
				subSkill: [
					createSubSkill("Area of Effect Damage Up", [200, 220, 240, 260, 280]),
				],
			},
			{
				name: "Joint Defense",
				description:
					" Sergey can organize strong perimeters, increasing all friendly hero Defense by {value}%",
				icon: skillIconPath("joint_defense.png"),
				level: 1,
				subSkill: [createSubSkill("Damage Up", [5, 7.5, 10, 12.5, 15])],
			},

			{
				name: "Shield Block",
				description:
					"Sergey trades in his shield for an upgraded model, reducing damage taken by {value}%.",
				icon: skillIconPath("shield_block.png"),
				level: 1,
				subSkill: [createSubSkill("Damage Taken Down", [10, 15, 20, 25, 30])],
			},
		],
		expedition: [
			{
				name: "Defenders Edge",
				description:
					"Sergey's guards our troops with his shield, reducing damage taken by {value}% for all troops.",
				level: 1,
				icon: skillIconPath("defenders_edge.png"),
				subSkill: [createSubSkill("Damage Taken Down", [4, 8, 12, 16, 20])],
			},
			{
				name: "Weaken",
				description:
					"Sergey's intimidating presence reduces Attack by {value}% for all enemy troops.",
				icon: skillIconPath("weaken.png"),
				level: 1,
				subSkill: [
					createSubSkill("Enemy Troops Attack Down", [4, 8, 12, 16, 20]),
				],
			},
		],
	},
	subClass: "Combat",
	assets: ["/assets/heroes/sergey.png"],
};

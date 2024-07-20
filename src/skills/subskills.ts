import type { SubSkill } from "@/types/hero";
import type { SubSkillType } from "@/types/subskill";

export const createSubSkill = (
	type: SubSkillType,
	values: number[],
): SubSkill => ({
	name: type,
	upgradeValues: values,
});

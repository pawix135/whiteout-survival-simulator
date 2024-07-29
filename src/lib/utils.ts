//@ts-ignore
import { type ClassValue, clsx } from "clsx";
//@ts-ignore
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const clamp = (value: number, min: number, max: number) => {
	return Math.min(Math.max(value, min), max);
};

export const skillIconPath = (icon_name: string) =>
	`/whiteout-survival-simulator/assets/skills/${icon_name}`;

export const heroModelPath = (model_name: string) =>
	`/whiteout-survival-simulator/assets/heroes/${model_name}`;

export const researchIconPath = (icon_name: string) =>
	`/whiteout-survival-simulator/assets/research/${icon_name}`;

export const chiefGearIconPath = (icon_name: string) =>
	`/whiteout-survival-simulator/assets/chief/gear/${icon_name}`;

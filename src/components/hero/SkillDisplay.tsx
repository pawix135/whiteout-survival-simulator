import { cn } from "@/lib/utils";
import type { HeroSkill } from "@/types/hero";

interface Props {
	skills: HeroSkill[];
	title: string;
	itemsRight?: boolean;
}

const SkillsDisplay: React.FC<Props> = ({ skills, title, itemsRight }) => {
	return (
		<div className="space-y-5">
			<p>{title}</p>
			<div
				className={cn("flex flex-col gap-5", {
					"items-end": itemsRight,
				})}
			>
				{skills.map((skill) => {
					return (
						<div key={skill.name}>
							<div className="relative w-max">
								<img
									src={
										skill.icon === "placeholder"
											? "placeholder.png"
											: skill.icon
									}
									alt={skill.name}
									className="size-[50px]"
								/>
								<p className="size-[15px] rounded-full flex items-center justify-center bg-white absolute bottom-0 right-0 text-black text-sm">
									{skill.level}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsDisplay;

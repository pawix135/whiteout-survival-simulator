import {
	type ChiefGearItemType,
	ChiefGearPartList,
	type ChiefGearPartType,
} from "@/types/gear";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { useStore } from "@/hooks/useStore";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { chiefGearIconPath } from "@/lib/utils";
import { useDispatch } from "@/hooks/useDispatch";
import { useCallback } from "react";

interface Props {
	type: ChiefGearItemType;
}

const ChiefGearSlot: React.FC<Props> = ({ type }) => {
	const { chiefGear } = useStore();
	const dispatch = useDispatch();
	const gear = chiefGear[type];

	const selectGear = useCallback(
		(tier: ChiefGearPartType) => {
			dispatch({
				type: "GEAR/SELECT",
				payload: {
					type,
					tier,
				},
			});
		},
		[type, dispatch],
	);

	return (
		<Dialog>
			<DialogTrigger asChild>
				{!gear ? (
					<Button className="border-2 border-gray-500 size-[100px] grid place-items-center">
						<Plus size={32} />
					</Button>
				) : (
					<button className="size-[100px] h-auto" type="button">
						<img
							src={chiefGearIconPath(
								`${type.toLocaleLowerCase()}_${"green"}.png`,
							)}
							className="size-[100px] h-auto"
							alt={type}
						/>
					</button>
				)}
			</DialogTrigger>
			<DialogContent
				className="max-w-[500px]"
				aria-describedby={`Select ${type}`}
				aria-description={`Select ${type}`}
			>
				<DialogTitle>{type}</DialogTitle>
				<DialogDescription />
				<div className="flex flex-row gap-5 flex-wrap w-full">
					{ChiefGearPartList.map((tier) => {
						const imgUrl = chiefGearIconPath(
							`${type.toLocaleLowerCase()}_${"green"}.png`,
						);
						return (
							<button
								type="button"
								key={tier}
								className="w-1/5 h-auto"
								onClick={() => {
									selectGear(tier);
								}}
							>
								<img
									src={imgUrl}
									className="w-full"
									alt={`${type.toLocaleLowerCase()} ${"green"}`}
								/>
							</button>
						);
					})}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ChiefGearSlot;

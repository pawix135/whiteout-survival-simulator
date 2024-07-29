import {
	type ChiefGearItemType,
	ChiefGearPartList,
	ChiefGearPartType,
} from "@/types/gear";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { useStore } from "@/hooks/useStore";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Props {
	type: ChiefGearItemType;
}

const ChiefGearSlot: React.FC<Props> = ({ type }) => {
	const { chiefGear } = useStore();
	const gear = chiefGear[type];

	if (!gear) {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button className="border-2 border-gray-500 size-[100px] grid place-items-center">
						<Plus size={32} />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>{type}</DialogTitle>
					{ChiefGearPartList.map((part) => {
						return (
							<div key={part}>
								<div>{part}</div>
							</div>
						);
					})}
				</DialogContent>
			</Dialog>
		);
	}

	return <div>Yay slot</div>;
};

export default ChiefGearSlot;

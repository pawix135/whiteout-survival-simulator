import { Plus } from "lucide-react";

interface Props {
	ok?: boolean;
}

const EmptySlot: React.FC = () => {
	return (
		<div className="border-2 border-gray-500 size-[100px] grid place-items-center">
			<Plus size={32} />
		</div>
	);
};

const ChiefGear: React.FC<Props> = () => {
	return (
		<div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-5 place-items-center max-w-[700px] mx-auto">
			<div>
				<EmptySlot />
			</div>
			<div>
				<EmptySlot />
			</div>
			<div>
				<EmptySlot />
			</div>
			<div className="row-span-3">
				<img
					src="/whiteout-survival-simulator/assets/chief/chief.png"
					alt=""
					className="size-[150px] h-auto "
				/>
			</div>
			<div>
				<EmptySlot />
			</div>
			<div>
				{" "}
				<EmptySlot />
			</div>
			<div>
				{" "}
				<EmptySlot />
			</div>
		</div>
	);
};

export default ChiefGear;

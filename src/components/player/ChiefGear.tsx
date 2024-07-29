import ChiefGearSlot from "./ChiefGearSlot";

interface Props {
	ok?: boolean;
}

const ChiefGear: React.FC<Props> = () => {
	return (
		<div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-5 place-items-center max-w-[700px] mx-auto">
			<div>
				<ChiefGearSlot type="Helmet" />
			</div>
			<div>
				<ChiefGearSlot type="Chest" />
			</div>
			<div>
				<ChiefGearSlot type="Ring" />
			</div>
			<div className="row-span-3">
				<img
					src="/whiteout-survival-simulator/assets/chief/chief.png"
					alt=""
					className="size-[150px] h-auto "
				/>
			</div>
			<div>
				<ChiefGearSlot type="Watch" />
			</div>
			<div>
				<ChiefGearSlot type="Leggins" />
			</div>
			<div>
				<ChiefGearSlot type="Weapon" />
			</div>
		</div>
	);
};

export default ChiefGear;

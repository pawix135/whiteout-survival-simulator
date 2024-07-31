import { useStore } from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import { useDispatch } from "@/hooks/useDispatch";

interface Props {
	ok?: boolean;
}
const furnaceLevel = () => Array.from({ length: 30 }, (_, i) => i + 1);

const CityInfo: React.FC<Props> = () => {
	const { city } = useStore();
	const dispatch = useDispatch();

	return (
		<Card>
			<CardHeader>
				<CardTitle>City Info</CardTitle>
			</CardHeader>
			<CardContent>
				<Separator className="mb-3" />
				<div className="space-y-2">
					<Label htmlFor="furnace-level">Furnace level</Label>
					<Select
						value={city.furnace.toString()}
						onValueChange={(value) => {
							dispatch({
								type: "CITY/SET/FURNACE",
								payload: Number.parseInt(value),
							});
						}}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="1" />
						</SelectTrigger>
						<SelectContent>
							{furnaceLevel().map((level) => (
								<SelectItem key={`furnace-level-${level}`} value={`${level}`}>
									{level}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</CardContent>
		</Card>
	);
};

export default CityInfo;

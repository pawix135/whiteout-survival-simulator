import { useStore } from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const StoreStateDebug = () => {
	const store = useStore();

	return (
		<Card className="fixed right-5 bottom-5 bg-secondary w-[500px]  p-2">
			<CardHeader>
				<CardTitle>Store Debug</CardTitle>
			</CardHeader>
			<CardContent className="overflow-y-auto h-[500px]">
				<pre>{JSON.stringify(store, null, 2)}</pre>
			</CardContent>
		</Card>
	);
};

export default StoreStateDebug;

import { useStore } from "@/hooks/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { base64ToState } from "@/lib/utils";

export const StoreStateDebug = () => {
	const store = useStore();

	return (
		<Card className="fixed right-5 bottom-5 bg-secondary w-[500px]  p-2">
			<CardHeader>
				<CardTitle>Store Debug</CardTitle>
			</CardHeader>
			<CardContent className="overflow-y-auto h-[500px]">
				<Tabs defaultValue="localstorage">
					<TabsList>
						<TabsTrigger value="state_json">State</TabsTrigger>
						<TabsTrigger value="localstorage">Local Storage</TabsTrigger>
					</TabsList>
					<TabsContent value="state_json">
						<pre>{JSON.stringify(store, null, 2)}</pre>
					</TabsContent>
					<TabsContent value="localstorage">
						<div className="w-full space-y-5">
							<div>
								<h1>Encoded</h1>
								<p className="break-words max-w-[200px]">
									{localStorage.getItem("store")}
								</p>
							</div>
							<div>
								<h1>Decoded</h1>
								<pre>
									{JSON.stringify(
										base64ToState(localStorage.getItem("store") ?? ""),
										null,
										2,
									)}
								</pre>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
};

export default StoreStateDebug;

import { ThemeProvider } from "@/components/theme-provider";
import HeroCard from "./components/hero/HeroCard";
import { HeroSergey } from "./heros/sergey";
import { HeroMolly } from "./heros/molly";
import CityInfo from "./components/city/CityInfo";
import ChiefGear from "./components/player/ChiefGear";
// import ResearchTree from "./components/research/ResearchTree";
import FacilitiesSelector from "./components/facilities/FacilitiesSelector";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="theme">
			<div className="container">
				<div className="space-y-10 mx-auto py-10">
					<CityInfo />
					{/* <ResearchTree /> */}
					<FacilitiesSelector />
					<ChiefGear />
					<div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 grid-flow-col items-stretch place-items-center gap-10 p-5">
						<HeroCard hero={HeroMolly} />
						<HeroCard hero={HeroSergey} />
						<HeroCard hero={HeroMolly} />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;

import { storeReducer } from "@/reducers/storeReducer";
import {
	initialStoreState,
	StoreContext,
	StoreDispatchContext,
} from "@/store/store";
import { useReducer } from "react";

interface Props extends React.PropsWithChildren {}

const StoreProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(storeReducer, initialStoreState);

	return (
		<StoreContext.Provider value={state}>
			<StoreDispatchContext.Provider value={dispatch}>
				{children}
			</StoreDispatchContext.Provider>
		</StoreContext.Provider>
	);
};

export default StoreProvider;

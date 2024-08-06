import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const useBreakpoints = () => {
	const { breakpoint } = useContext(AppContext)!;

	if (breakpoint === undefined) {
		throw new Error("useBreakpoints hook must be used within ContexProvider");
	}

	return { breakpoint };
};

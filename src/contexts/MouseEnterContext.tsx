import { createContext, Dispatch, SetStateAction } from "react";

type MouseEnterContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const MouseEnterContext = createContext<
	MouseEnterContextType | undefined
>(undefined);

import { ViteReactSSG } from "vite-react-ssg/single-page";
import { App } from "./App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createRoot: (client?: boolean, routePath?: string) => Promise<any> = ViteReactSSG(<App />);

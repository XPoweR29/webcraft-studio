import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./sass/global.scss";
import { ContextProvider } from "./contexts/AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);

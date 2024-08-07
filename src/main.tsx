import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/global.scss";
import { ContextProvider } from "./contexts/AppContext";
import { Home } from "./pages/Home/Home";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ContextProvider>
			<Home />
		</ContextProvider>
	</React.StrictMode>
);

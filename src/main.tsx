import ReactDOM from "react-dom/client";
import "./sass/global.scss";
import { ContextProvider } from "./contexts/AppContext";
import { Home } from "./pages/Home/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ContextProvider>
		<Home />
	</ContextProvider>
);

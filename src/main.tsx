import ReactDOM from "react-dom/client";
import "./sass/global.scss";
import { ContextProvider } from "./contexts/AppContext";
import { Home } from "./pages/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { About } from "./pages/About/About";
import { Offer } from "./pages/Offer/Offer";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ContextProvider>
			<Nav />
			<Home />
			<About />
			<Offer/>
	</ContextProvider>
);

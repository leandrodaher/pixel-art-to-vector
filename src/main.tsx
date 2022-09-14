import { Root, createRoot } from "react-dom/client";
import { AppComponent } from "./components/appcomponent";
import "./lib/i18next";

const rootElement: HTMLElement = document.getElementById("root")!,
	root: Root = createRoot(rootElement);

root.render(<AppComponent />);

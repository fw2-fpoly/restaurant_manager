import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
// react

// style font
import "@fontsource/quicksand/300.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";

// custom them chakra ui
import customTheme from "~/theme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import store, { persistor } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
			<ChakraProvider theme={customTheme} resetCSS={true}>
				<CSSReset />
				<App /> 
			</ChakraProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

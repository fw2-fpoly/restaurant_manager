import { extendTheme } from "@chakra-ui/react";
import globalStyles from "./global";
import { Button } from "./components/button";
import { Input } from "./components/input";

const customTheme = extendTheme(globalStyles, {
	components: {
		Input,
		Button,
	},
});

export default customTheme;

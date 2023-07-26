import { extendTheme } from "@chakra-ui/react";
import globalStyles from "./global";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Select } from "./components/select";

const customTheme = extendTheme(globalStyles, {
	components: {
		Input,
		Button,
		Select,
	},
});

export default customTheme;

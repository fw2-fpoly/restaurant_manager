import { extendTheme } from "@chakra-ui/react";
import globalStyles from "./global";
import { Button } from "./components/button";

export default extendTheme(globalStyles, {
	components: {
		Button,
	},
});

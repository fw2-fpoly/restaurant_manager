import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router";

type Props = {};

const AuthLayout = (props: Props) => {
	return (
		<Grid
			templateColumns="repeat(12, 1fr)"
			h="100vh"
		>
			<GridItem
				w="100%"
				h="full"
				colSpan={5}
			>
				<Outlet />
			</GridItem>
			<GridItem
				w="100%"
				h="full"
				colSpan={7}
				bgColor="#f8646f"
			></GridItem>
		</Grid>
	);
};

export default AuthLayout;

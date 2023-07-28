import { Grid, GridItem } from "@chakra-ui/layout";
import { Outlet } from "react-router-dom";
import { Header } from "~/components/common/Header";
import { Sidebar } from "~/components/common/Sidebar";

type Props = {};

const MainLayout = (props: Props) => {
	return (
		<Grid
			templateAreas={`"nav main"`}
			gridTemplateColumns={"240px 1fr"}
			h="100vh"
			fontWeight="bold"
			bg="bgGray"
		>
			<GridItem
				w="240px"
				h="full"
				px="6"
				py="8"
				bg="white"
				area={"nav"}
				position="fixed"
				borderTopRightRadius="2xl"
				borderBottomRightRadius="2xl"
			>
				<Sidebar />
			</GridItem>
			<GridItem
				px={12}
				py={8}
				bg="bgGray"
				area={"main"}
			>
				<Header />
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default MainLayout;

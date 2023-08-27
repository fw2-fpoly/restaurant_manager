import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { ICategory } from "~/interface/products";
import { categoryList } from "~/utils/data";
import CardCategory from "./components/CardCategory";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import CardProduct from "~/components/Food/Food";
import OrderDetail from "./components/OrderDetail";
type Props = {};

const MenuView = (props: Props) => {
	const [isOpen, setOpen] = useState<boolean>(true);

	const handleAddProduct = () => {
		setOpen(false);
	};
	return (
		<Grid
			gridTemplateColumns="repeat(7,1fr)"
			gap={6}
			px={3}
			mt={8}
		>
			<GridItem
				width={"full"}
				colSpan={isOpen ? 7 : 5}
			>
				<Grid
					templateColumns="repeat(2,1fr)"
					gap={12}
				>
					<GridItem>
						<Filter />
					</GridItem>
					<GridItem>
						<Flex>
							<SearchBar />
						</Flex>
					</GridItem>
				</Grid>
				<Box>
					<Flex
						gap={4}
						mt={8}
						mb={6}
					>
						{categoryList.map((item: ICategory) => {
							return <CardCategory category={item} />;
						})}
					</Flex>
				</Box>
				<Box>
					<Text
						pt={4}
						pb={6}
						fontSize="md"
					>
						Danh sách sản phẩm
					</Text>
					<Grid
						templateColumns="repeat(5,1fr)"
						gap={4}
					>
						{[2].map((item) => {
							return <CardProduct handleAddProduct={handleAddProduct} />;
						})}
					</Grid>
				</Box>
			</GridItem>
			<GridItem
				py="8"
				colSpan={2}
				px="4"
				h="90%"
				bg="white"
				borderRadius="2xl"
				my={4}
				display={isOpen ? "none" : "block"}
			>
				<OrderDetail />
			</GridItem>
		</Grid>
	);
};

export default MenuView;

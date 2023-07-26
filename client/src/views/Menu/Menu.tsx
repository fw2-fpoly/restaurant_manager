import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { Food } from "~/components/Food";
import { ICategory } from "~/interface/products";
import { categoryList } from "~/utils/data";
import CardCategory from "./components/CardCategory";
import Filter from "./components/Filter";
import { OrderCard } from "~/components/OrderCard";
import SearchBar from "./components/SearchBar";

type Props = {};
const data = [
	{
		id: 1,
		name: "pizza",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
	},
	{
		id: 2,
		name: "Keo ke",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/15.png",
	},
	{
		id: 3,
		name: "bot mi",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/14.png",
	},
	{
		id: 4,
		name: "pizza",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
	},
	{
		id: 5,
		name: "mi tom",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
	},
	{
		id: 6,
		name: "pizza",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
	},
	{
		id: 7,
		name: "pizza",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
	},
	{
		id: 8,
		name: "pizza",
		price: 200,
		image: "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
	},
];
const MenuView = (props: Props) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleAddProduct = () => {
		setOpen(true);
	};
	return (
		<Grid
			gridTemplateColumns="repeat(12,1fr)"
			gap={6}
			mt={8}
			mx={3}
		>
			<GridItem
				width={"full"}
				colSpan={!isOpen ? 12 : 8}
			>
				<Grid
					gap={12}
					templateColumns="repeat(2,1fr)"
				>
					<GridItem>
						<Filter />
					</GridItem>
					<GridItem>
						<SearchBar />
					</GridItem>
				</Grid>
				<Flex
					gap={4}
					mt={6}
					mb={8}
				>
					{categoryList.map((item: ICategory) => {
						return <CardCategory category={item} />;
					})}
				</Flex>
				<Box>
					<Box
						as={"h1"}
						mt={6}
						mb={8}
					>
						Danh sách sản phẩm
					</Box>
					<Grid
						templateColumns={`repeat(${!isOpen ? 5 : 4},1fr)`}
						gap={6}
					>
						{data.map((item: any, index: number) => {
							return (
								<Food
									key={index}
									handleAddProduct={handleAddProduct}
								/>
							);
						})}
					</Grid>
				</Box>
			</GridItem>
			<GridItem
				colSpan={4}
				bg="white"
				p={6}
				rounded="sm"
				display={!isOpen ? "none" : "block"}
			>
				<OrderCard />
			</GridItem>
		</Grid>
	);
};

export default MenuView;

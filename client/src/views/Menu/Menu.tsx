import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { CardProduct } from "~/components/ProductCard";
import SearchBar from "./components/SearchBar";
import { categoryList } from "~/utils/data";
import { ICategory } from "~/interface/products";
import CardCategory from "./components/CardCategory";
import Filter from "./components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "~/store/slices/couterSlice";
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
	const currentProduct: any[any] = [];
	const array = localStorage.getItem("order");
	if (!array) {
		localStorage.setItem("order", JSON.stringify(currentProduct));
	}
	const arrayOrder = JSON.parse(array || "");

	const openCurrent = (value: boolean) => {
		setOpen(value);
	};
	const currentOrder = (product: any) => {
		setOpen(true);
		const filterOrder = arrayOrder.find((item: any) => item.id == product.id);
		console.log(filterOrder);

		if (filterOrder) {
			const newarray = arrayOrder.map((item: any) => {
				return item.id === filterOrder.id ? { ...filterOrder, quantity: filterOrder.quantity + 1 } : item;
			});

			return localStorage.setItem("order", JSON.stringify(newarray));
		} else {
			const newProduct = {
				...product,
				quantity: 1,
			};
			arrayOrder.push(newProduct);
			localStorage.setItem("order", JSON.stringify(arrayOrder));
		}
	};
	console.log(useSelector(({ counter }) => counter));

	return (
		<Box display="flex" justifyContent={"space-between"}>
			<Box width={"full"}>
				<Grid templateColumns="repeat(2,1fr)" my={4} gap={4}>
					<GridItem>
						<Text>Lọc sản phẩm</Text>
						<Filter />
					</GridItem>
					<GridItem>
						<Text>Tìm kiếm sản phâm</Text>
						<Flex my={4}>
							<SearchBar />
						</Flex>
					</GridItem>
				</Grid>
				<Box>
					<Text>Danh mục sản phẩm</Text>
					<Flex gap={4} my={4}>
						{categoryList.map((item: ICategory) => {
							return <CardCategory category={item} />;
						})}
					</Flex>
				</Box>
				<Box>
					<Box as={"h1"} marginY={"10"}>
						Danh sách sản phẩm
					</Box>
					<Grid templateColumns="repeat(5,1fr)" gap={4}>
						{data.map((item) => {
							return <CardProduct />;
						})}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default MenuView;

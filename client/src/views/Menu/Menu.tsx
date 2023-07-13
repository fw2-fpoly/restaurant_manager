import { Box, Grid } from "@chakra-ui/layout";
import { Button, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SearchIcon, PizzaIcon } from "~/components/Icons";
import { CurrentOrder } from "~/components/currentOrder";
import { ProductCard } from "~/components/productCard";

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
	return (
		<Box display={isOpen === true ? "flex" : "block"} justifyContent={"space-between"}>
			<Box width={"full"}>
				<Box>
					<form action="">
						<Box rounded={6} backgroundColor={"white"} width={"550px"} borderRadius={"full"}>
							<Input
								type="search"
								placeholder="Search category of menu"
								width={"500px"}
								border={"none"}
								borderRadius={"full"}
								paddingY={"5"}
								paddingLeft={"5"}
							/>
							<button>
								<SearchIcon boxSize={6} />
							</button>
						</Box>
					</form>
				</Box>
				<Box display={"flex"} width={"600px"} gap={"10px"} marginTop={"8"}>
					<Box
						flex={1}
						backgroundColor={"gray.200"}
						color={"black"}
						_hover={{ bg: "#EC8069" }}
						as={Button}
						borderRadius={"full"}
						leftIcon={<PizzaIcon boxSize={"6"} />}
					>
						Pizza
					</Box>
					<Box
						flex={1}
						backgroundColor={"gray.200"}
						color={"black"}
						_hover={{ bg: "#EC8069" }}
						as={Button}
						borderRadius={"full"}
						leftIcon={<PizzaIcon boxSize={"6"} />}
					>
						Pizza
					</Box>
					<Box
						flex={1}
						backgroundColor={"gray.200"}
						color={"black"}
						_hover={{ bg: "#EC8069" }}
						as={Button}
						borderRadius={"full"}
						leftIcon={<PizzaIcon boxSize={"6"} />}
					>
						Pizza
					</Box>
					<Box
						flex={1}
						backgroundColor={"gray.200"}
						color={"black"}
						_hover={{ bg: "#EC8069" }}
						as={Button}
						borderRadius={"full"}
						leftIcon={<PizzaIcon boxSize={"6"} />}
					>
						Pizza
					</Box>
				</Box>
				<Box>
					<Box as={"h1"} marginY={"10"}>
						CHOOSE PIZZA
					</Box>
					<Grid
						templateColumns={isOpen === true ? "repeat(3,1fr)" : "repeat(4,1fr)"}
						gap={4}
						marginTop={"50px"}
					>
						{data.map((item) => {
							return <ProductCard product={item} openCurrent={openCurrent} currentOrder={currentOrder} />;
						})}
					</Grid>
				</Box>
			</Box>
			<CurrentOrder display={isOpen} openCurrent={openCurrent} />
		</Box>
	);
};

export default MenuView;

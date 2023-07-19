import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { CardProduct } from "~/components/ProductCard";
import SearchBar from "./components/SearchBar";
import { categoryList } from "~/utils/data";
import { ICategory } from "~/interface/products";
import CardCategory from "./components/CardCategory";
import Filter from "./components/Filter";
import OrderDetail from "./components/OrderDetail";

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
  const [isOpen, setOpen] = useState<boolean>(true);

  const handleAddProduct = () => {
    setOpen(false);
  };
  return (
    <Grid gridTemplateColumns="repeat(7,1fr)" gap={6}>
      <GridItem width={"full"} colSpan={isOpen ? 7 : 5} my={4}>
        <Grid templateColumns="repeat(2,1fr)" gap={4}>
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
              return <CardProduct handleAddProduct={handleAddProduct}/>;
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

import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { categoryList } from "~/utils/data";
import { ICategory } from "~/interface/products";
import CardCategory from "./components/CardCategory";
import Filter from "./components/Filter";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "~/store/slices/cartSlice";
import CardProduct from "~/components/Food/Food";
import OrderDetail from "./components/OrderDetail";
type Props = {};

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
            <Text my={4}>Lọc sản phẩm</Text>
            <Filter />
          </GridItem>
          <GridItem>
            <Text my={4}>Tìm kiếm sản phâm</Text>
            <Flex>
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

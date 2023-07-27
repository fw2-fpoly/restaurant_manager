import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { CardProduct } from "~/components/ProductCard";
import SearchBar from "./components/SearchBar";
import { categoryList, products } from "~/utils/data";
import { ICategory, IOrder, IProduct } from "~/interface/products";
import CardCategory from "./components/CardCategory";
import Filter from "./components/Filter";
import OrderDetail from "./components/OrderDetail";

import { useSelector, useDispatch } from "react-redux";
import { addCart } from "~/store/slices/cartSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { IBill } from "~/interface/order";
type Props = {};

const MenuView = (props: Props) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const handleAddProduct = (item: IProduct) => {
    const dataItem:IBill = {
      foods:item,
      quantity: 1,
      totalMoney : item.price * 1,
      description: "mo ta yeu cau 1"
    }
    const action = addCart(dataItem);
    dispatch(action);
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
              return <CardCategory category={item} key={item._id} />;
            })}
          </Flex>
        </Box>
        <Box>
          <Box as={"h1"} marginY={"10"}>
            Danh sách sản phẩm
          </Box>
          <Grid templateColumns="repeat(5,1fr)" gap={4}>
            {products.map((item: IProduct) => {
              return (
                <CardProduct
                  handleAddProduct={handleAddProduct}
                  item={item}
                  key={item._id}
                />
              );
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
        <OrderDetail order={order} />
      </GridItem>
    </Grid>
  );
};

export default MenuView;

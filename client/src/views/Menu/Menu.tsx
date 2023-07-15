import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { CurrentOrder } from "~/components/currentOrder";
import { CardProduct, ProductCard } from "~/components/ProductCard";
import SearchBar from "./components/SearchBar";
import { categoryList } from "~/utils/data";
import { ICategory } from "~/interface/products";
import CardCategory from "./components/CardCategory";

type Props = {};
const data = [
  {
    id: 1,
    name: "pizza",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
  },
  {
    id: 2,
    name: "Keo ke",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/15.png",
  },
  {
    id: 3,
    name: "bot mi",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/14.png",
  },
  {
    id: 4,
    name: "pizza",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
  },
  {
    id: 5,
    name: "mi tom",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
  },
  {
    id: 6,
    name: "pizza",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
  },
  {
    id: 7,
    name: "pizza",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
  },
  {
    id: 8,
    name: "pizza",
    price: 200,
    image:
      "https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png",
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
        return item.id === filterOrder.id
          ? { ...filterOrder, quantity: filterOrder.quantity + 1 }
          : item;
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
    <Box
      display={isOpen === true ? "flex" : "block"}
      justifyContent={"space-between"}
    >
      <Box width={"full"}>
        <Grid templateColumns="repeat(2,1fr)">
          <GridItem></GridItem>
          <GridItem></GridItem>
        </Grid>
        <Grid templateColumns="repeat(2,1fr)" my={4}>
          <GridItem>
            <Text>Danh mục sản phẩm</Text>
            <Flex gap={4} my={4}>
              {categoryList.map((item: ICategory) => {
                return <CardCategory category={item} />;
              })}
            </Flex>
          </GridItem>

          <GridItem>
            <Text>Tìm kiếm sản phâm</Text>
            <Flex my={4}>
              <SearchBar />
            </Flex>
          </GridItem>
        </Grid>

        <Box>
          <Box as={"h1"} marginY={"10"}>
            Danh sách sản phẩm
          </Box>
          <Grid
            templateColumns="repeat(5,1fr)"
            gap={4}
          >
            {data.map((item) => {
              return (
                <CardProduct />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuView;

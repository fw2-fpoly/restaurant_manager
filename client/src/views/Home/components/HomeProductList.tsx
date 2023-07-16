import { Flex, Grid, Text, Box, Spacer } from "@chakra-ui/layout";

import { useState } from "react";
import { ICategory, IProduct } from "~/interface/products";
import CardCategory from "./CardCategory";
import CardProduct from "./CardProduct";
import { Button } from "@chakra-ui/react";
import Title from "./Title";

type Props = {
  categories: ICategory[];
  products: IProduct[];
  selectProduct?: (id: string) => void;
  openModal?: () => void;
};

const HomeProductList = ({ categories, products }: Props) => {
  return (
    <>
      <Title title="Nổi bật" />
      <Grid
        my={5}
        templateColumns={{ sm: "repeat(3, 1fr)", md: "repeat(5,1fr)" }}
        gap={6}
      >
        {products.map((product: IProduct) => (
          <CardProduct />
        ))}
      </Grid>
      <Title title="Bán chạy nhất" />
      <Grid
        my={5}
        templateColumns={{ sm: "repeat(3, 1fr)", md: "repeat(5,1fr)" }}
        gap={6}
      >
        {products.map((product: IProduct) => (
          <CardProduct />
        ))}
      </Grid>
    </>
  );
};

export default HomeProductList;

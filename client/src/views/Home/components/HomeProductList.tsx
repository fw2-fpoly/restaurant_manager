import { Flex, Grid, Text, UnorderedList } from "@chakra-ui/layout";

import { useState } from "react";
import { ICategory, IProduct } from "~/interface/products";
import CardCategory from "./CardCategory";
import CardProduct from "./CardProduct";

type Props = {
  categories: ICategory[];
  products: IProduct[];
  selectProduct?: (id: string) => void;
  openModal?: () => void;
};

const HomeProductList = ({ categories, products }: Props) => {
  return (
    <>
      <Flex alignItems="center" my={10}>
        <UnorderedList
          fontSize="sm"
          w="full"
          styleType="none"
          display="grid"
          gridTemplateColumns={"repeat(8,1fr)"}
          gap={4}
          alignItems="center"
        >
          <Text w="100px" fontSize="lg" fontWeight={900}>
            Nổi bật
          </Text>
          {categories.map((item: ICategory) => (
            <CardCategory key={item.title} category={item} />
          ))}
        </UnorderedList>
      </Flex>
      <Grid
        my={5}
        templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(5,1fr)" }}
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

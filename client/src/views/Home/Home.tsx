import { useState } from "react";
import { categoryList, products } from "~/utils/data";
import { IProduct } from "~/interface/products";

import Banner from "./components/Banner";
import HomeProductList from "./components/HomeProductList";

//component charkra ui
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import CardNews from "./components/CardNews";

type Props = {};

const HomeView = (props: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>(
    {} as IProduct
  );
  const handleSelect = (id: string) => {
    const currentProduct = products.find((item) => item.id === id);
    if (currentProduct) {
      setSelectedProduct(currentProduct);
    }
  };

  return (
    <Flex backgroundColor="whiteAlpha.100">
      <Box w={{ sm: "100%", md: "full" }} pr={10}>
        {/* End of search bar */}
        <Grid
          my={10}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Banner />
          </GridItem>
          <GridItem colSpan={1}>
            <CardNews />
          </GridItem>
          <GridItem colSpan={1}>
            <CardNews />
          </GridItem>
          <GridItem colSpan={1}>
            <CardNews />
          </GridItem>
          <GridItem colSpan={1}>
            <CardNews />
          </GridItem>
        </Grid>
        <HomeProductList
          selectProduct={handleSelect}
          products={products}
          categories={categoryList}
        />
      </Box>
    </Flex>
  );
};

export default HomeView;

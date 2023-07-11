import {
  Flex,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import { Button, Img } from "@chakra-ui/react";
import { StarIcon } from "~/components/Icons";

type Props = {
  categories: any[];
  products: any[];
  selectProduct?: (id: any) => void;
};

const HomeProductList = ({ categories, products, selectProduct }: Props) => {
  // Fake data

  const ListItemBox = ({ category }: any) => {
    return (
      <Button
        bg="gray.100"
        borderRadius="full"
        color="black.500"
        _hover={{ bg: "primary.100", color: "white" }}
      >
        <ListItem>{category.title}</ListItem>
      </Button>
    );
  };

  return (
    <>
      <Flex alignItems="center">
        <Text w="100px" fontSize="lg" fontWeight={900}>
          Nổi bật
        </Text>
        <UnorderedList
          fontSize="sm"
          w="full"
          styleType="none"
          display="grid"
          gridTemplateColumns={"repeat(6,1fr)"}
          gap={4}
          alignItems="center"
        >
          $
          {categories.map((item) => (
            <ListItemBox key={item.title} category={item} />
          ))}
        </UnorderedList>
      </Flex>
      <Grid my={5} h="500px" templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product) => (
          <ProductCard
            selectProduct={() => selectProduct(product?.id)}
            key={product.id}
            product={product}
          />
        ))}
      </Grid>
    </>
  );
};
const ProductCard = ({ product, selectProduct, isHomeViewed }: any) => {
  return (
    <GridItem cursor="pointer" onClick={selectProduct}>
      <Img
        borderRadius="lg"
        objectFit="cover"
        h="250"
        src={product.thumbnail}
        alt=""
      />
      {isHomeViewed ? (
        <Text my={4} fontSize={22} textAlign="center" noOfLines={2}>
          {product.name}
        </Text>
      ) : (
        <Text my={2} fontSize={18} noOfLines={1}>
          {product.name}
        </Text>
      )}

      <Flex justifyContent="space-between" fontWeight={800} fontSize="sm">
        <Text as="span" color="blackAlpha.500">
          {product.price}{" "}
          <Text as="span" color="red.500">
            VND
          </Text>{" "}
        </Text>
        <Flex justifyItems="center" alignItems="center">
          <Text as="span" color="blackAlpha.500">
            {product.rating}
          </Text>
          <StarIcon size={10} />
        </Flex>
        <Text as="span" color="blackAlpha.500">
          {product.preparedIn} min
        </Text>
      </Flex>
    </GridItem>
  );
};
export { ProductCard };
export default HomeProductList;

import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import SearchBar from "./components/SearchBar";
import { Button } from "@chakra-ui/react";
import { CartIcon } from "~/components/Icons";
import Banner from "./components/Banner";
import HomeProductList, {
  ProductDetailModal,
} from "./components/HomeProductList";
import { useState } from "react";

type Props = {};

const HomeView = (props: Props) => {
  const thumbnail =
    "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium";
  const Products = [
    {
      id: 1,
      price: 200,
      name: "Bún đậu mắm tôm",
      thumbnail,
      rating: 4.5,
      preparedIn: 10,
    },
    {
      id: 2,
      price: 200,
      name: "Phở bò tái nạm",
      thumbnail,
      rating: 4.5,
      preparedIn: 10,
    },
    {
      id: 3,
      price: 200,
      name: "Cơm rang dưa bò",
      thumbnail,
      rating: 4.5,
      preparedIn: 10,
    },
    {
      id: 4,
      price: 200,
      name: "Miến xào lòng mè",
      thumbnail,
      rating: 4.5,
      preparedIn: 10,
    },
    {
      id: 5,
      price: 200,
      name: "Bún chả phố cổ",
      thumbnail,
      rating: 4.5,
      preparedIn: 10,
    },
    {
      id: 6,
      price: 200,
      name: "Bữa cơm tử tù",
      thumbnail,
      rating: 4.5,
      preparedIn: 10,
    },
  ];
  const CategoryList = [
    { title: "Danh muc 1", path: "danhmuc1" },
    { title: "Danh muc 2", path: "danhmuc1" },
    { title: "Danh muc 3", path: "danhmuc1" },
  ];
  const handleSelect = (id: any) => {
    let currentProduct = Products.find((item) => item.id === id);
    setSelectedProduct({ ...currentProduct });
  };
  const [selectedProduct, setSelectedProduct] = useState<{} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  const onOpenModal = () => setIsModalOpen(true);
  const defaultUserAvatar =
    "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";
  const user = {
    name: "Username",
    avatar:
      "https://nld.mediacdn.vn/291774122806476800/2022/12/27/avatar-3-jpeg-5860-1671963099-16721250426061326455942.jpg",
  };
  console.log(selectedProduct);
  return (
    <Center backgroundColor="whiteAlpha.100">
      {selectedProduct && (
        <ProductDetailModal
          selectedProduct={selectedProduct}
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          isOpen={isModalOpen}
        />
      )}
      <Box w="full" pr={10}>
        {/* Search bar */}
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Text fontSize="sm" w="40%" as="span">
            Xin chào,{" "}
            <Text as="span" color="primary.100">
              {user.name}
            </Text>{" "}
          </Text>
          <Spacer />
          <SearchBar />
          <Button
            ml={10}
            size="md"
            bg="gray.100"
            borderRadius="full"
            color="black.500"
            _hover={{ bg: "primary.100", color: "white" }}
            fontWeight={400}
            w="5%"
          >
            <Flex justifyItems="center">
              <CartIcon boxSize="6" />
            </Flex>
          </Button>
        </Flex>
        {/* End of search bar */}
        <Banner />
        <HomeProductList
          selectProduct={handleSelect}
          products={Products}
          categories={CategoryList}
          openModal={onOpenModal}
        />
      </Box>
    </Center>
  );
};

export default HomeView;

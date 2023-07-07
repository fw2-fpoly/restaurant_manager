import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import SearchBar from "./components/SearchBar";
import {
  Button,
  Img,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { CartIcon, SettingIcon } from "~/components/Icons";
import Banner from "./components/Banner";
import HomeProductList, { ProductCard } from "./components/HomeProductList";
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
  const defaultUserAvatar =
    "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";
  const user = {
    name: "Username",
    avatar:
      "https://nld.mediacdn.vn/291774122806476800/2022/12/27/avatar-3-jpeg-5860-1671963099-16721250426061326455942.jpg",
  };
  console.log(selectedProduct);
  return (
    <Flex backgroundColor="whiteAlpha.100">
      <Box w={{ sm: "100%", md: "full" }} pr={10}>
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
        />
      </Box>
      <Box
        pl={5}
        hideBelow="md"
        w="30%"
        borderLeft="1px"
        borderLeftColor="blackAlpha.100"
      >
        <Flex
          alignItems="center"
          justify="space-around"
          borderBottom="1px"
          borderBottomColor="blackAlpha.100"
          pb={5}
        >
          <Img
            src={user.avatar ?? defaultUserAvatar}
            w={10}
            h={10}
            rounded="full"
            objectFit="cover"
          />
          <Text px={2} fontSize={14}>
            {user.name}
          </Text>
          <Button
            bg="gray.100"
            rounded="full"
            p={2}
            color="black.500"
            _hover={{ bg: "primary.100", color: "white" }}
            fontWeight={400}
          >
            <SettingIcon boxSize={6} />
          </Button>
        </Flex>
        {/* San pham duoc chon xuat hien o day */}
        <Box my={10}>
          {selectedProduct ? (
            <Box>
              <Text mb="5" textAlign="center">
                Chi tiết
              </Text>
              <form action="">
                <ProductCard isHomeViewed={true} product={selectedProduct} />
                <NumberInput
                  my={10}
                  w="50%"
                  mx="auto"
                  defaultValue={1}
                  min={1}
                  max={10}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Button rounded="full" w="full" _hover={{ bg: "red.500" }}>
                  Thêm vào giỏ hàng
                </Button>
              </form>
            </Box>
          ) : (
            <Box>
              <Img src="https://cdn.dribbble.com/users/1058271/screenshots/3308780/media/178f7adc82972a23bd05f460662d533c.png?compress=1&resize=400x300&vertical=top" />
              <Text my={10} fontSize={14} color="blackAlpha.500">
                Có vẻ như là bạn chưa chọn sản phẩm nào?!
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeView;

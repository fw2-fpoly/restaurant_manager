import React, { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  Center,
} from "@chakra-ui/layout";
import {
  Button,
  Image,
  IconButton,
  Radio,
  useRadioGroup,
} from "@chakra-ui/react";
import {
  IconCash,
  IconQrCode,
  LogoIcon,
  // TableForIcon,
  // TableSixIcon,
  // TableTwoIcon,
  WalletIcon,
} from "../../../components/Icons";
import { useSelector, useDispatch } from "react-redux";

// import { table } from "~/utils/data";
import { IProduct } from "~/interface/products";
import { IBill } from "~/interface/order";
import RadioCard from "./PayMent";
type Props = {};

const payments = [
  {
    id: 1,
    name: "Wallet",
    icon: <WalletIcon width={6} />,
  },
  {
    id: 2,
    name: "Cash",
    icon: <IconCash width={6} />,
  },
  {
    id: 3,
    name: "QrCode",
    icon: <IconQrCode width={6} />,
  },
];

const OrderDetail = (props: Props) => {
  const { cart } = useSelector((state: any) => state.cart);

  const [selected, setSelected] = useState("");

  const handleChange = (value: any) => {
    setSelected(value);
  };

  const { getRadioProps, getRootProps } = useRadioGroup({
    onChange: handleChange,
  });

  return (
    <Box
      w="100%"
      h="100%"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <Box height="55%">
        <Box>
          <Flex justifyContent="space-between">
            <Box>
              <Text color="#b4b4b4">Orders ID</Text>
              <Text>#534534</Text>
            </Box>
            <Box>
              <Text color="#b4b4b4">Table</Text>
              <Text textAlign="end">T1</Text>
            </Box>
          </Flex>
        </Box>
        <Flex gap={4} my={4}>
          <Button
            size="sm"
            background="green.400"
            borderRadius="8px"
            _hover={{ background: "green.500" }}
          >
            Dinner in
          </Button>
          <Button
            size="sm"
            background="green.400"
            borderRadius="8px"
            _hover={{ background: "green.500" }}
          >
            Take away
          </Button>
        </Flex>
        <Box marginTop="10px" overflowY="scroll" maxH="400px">
          {cart?.map((item: IBill) => {
            return (
              <HStack
                alignItems="flex-start"
                paddingY="14px"
                borderBottom="1px solid  rgb(228 228 231)"
              >
                <Box
                  width="20%"
                  borderRadius="16px"
                  overflow="hidden"
                  marginTop="6px"
                >
                  <Image
                    src={item.foods.image}
                    alt="Anh do an"
                    width="100%"
                    height="80px"
                  ></Image>
                </Box>
                <Box width="80%">
                  <Text fontSize="md" fontWeight="800">
                    {item.foods.name}
                  </Text>
                  <Text fontSize="xs" mt="2px" color="#b4b4b4">
                    Note: {item.description}
                  </Text>
                  <Flex justifyContent="space-between" marginTop="10px">
                    <HStack>
                      <Text fontSize="sm" color="rgb(113 113 122)">
                        ${item.foods.price}
                      </Text>
                      <Text fontSize="xs" color="#b4b4b4">
                        x{item.quantity}
                      </Text>
                    </HStack>
                    <Text fontSize="sm">${item.totalMoney}</Text>
                  </Flex>
                </Box>
              </HStack>
            );
          })}
        </Box>
      </Box>

      <Box paddingY="26px">
        <Box borderBottom="1px solid  rgb(248 250 252)" paddingBottom="10px">
          <Flex justifyContent="space-between">
            <Text fontSize="xs" color="#D0D0D0">
              Items(7)
            </Text>
            <Text fontSize="sm">$28,67</Text>
          </Flex>
          <Flex justifyContent="space-between" marginTop="10px">
            <Text fontSize="xs" color="#D0D0D0">
              Tax(10%)
            </Text>
            <Text fontSize="sm">$2,86</Text>
          </Flex>
        </Box>
        <Flex justifyContent="space-between" marginTop="24px">
          <Text fontSize="xs" color="#D0D0D0">
            Total
          </Text>
          <Text fontSize="sm">$31,53</Text>
        </Flex>
        <Box>
          <Text fontSize="lg" my="4">
            Available table : T2
          </Text>
          <Grid gap={2} templateColumns="repeat(5, 1fr)">
            {[].map((item) => {
              return (
                <GridItem key={item}>
                  <Button
                    w="100%"
                    h="auto"
                    color="text.300"
                    bgColor="none"
                    rounded="lg"
                    _hover={{ bgColor: "gray.100" }}
                    px={2}
                    py={4}
                    display="flex"
                    flexDirection="column"
                  >
                    <IconButton
                      aria-label="payment"
                      // icon={
                      //   item.capacity === 2 ? (
                      //     <TableTwoIcon size={12} />
                      //   ) : item.capacity === 4 ? (
                      //     <TableForIcon size={12} />
                      //   ) : (
                      //     <TableSixIcon size={12} />
                      //   )
                      // }
                      background="none"
                      color={
                        item.status === "available" ? "green.400" : "gray.100"
                      }
                    />
                    <Text color="green">T{item.table_number}</Text>
                  </Button>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Box {...getRootProps()}>
          <Text fontSize="lg" my="4">
            Payment Methods: {selected}
          </Text>
          <Grid gap={2} templateColumns="repeat(3, 1fr)">
            {payments.map((item) => {
              return (
                <GridItem key={item.id}>
                  <RadioCard
                    item={item}
                    {...getRadioProps({ value: item.name })}
                  />
                </GridItem>
              );
            })}
          </Grid>
          <Button rounded="12px" mt="26px" w="full">
            Pay Bills
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetail;

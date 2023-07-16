import React from "react";
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
import { Button, Image, IconButton, Radio } from "@chakra-ui/react";
import { IconCash, IconQrCode, LogoIcon, WalletIcon } from "../Icons";
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
        <Box marginTop="10px" overflowY="auto" h="80%">
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
                src="https://i.pinimg.com/originals/60/10/4a/60104a06b2c5da9e7ab683b3d6cfdd15.jpg"
                alt="Anh do an"
              ></Image>
            </Box>
            <Box width="80%">
              <Text fontSize="md" fontWeight="800">
                Orange Juice
              </Text>
              <Text fontSize="xs" mt="2px" color="#b4b4b4">
                Note: Less ice
              </Text>
              <Text fontSize="xs" mt="2px" color="#b4b4b4">
                Extras: Extra Mazaredo
              </Text>
              <Flex justifyContent="space-between" marginTop="10px">
                <HStack>
                  <Text fontSize="sm" color="rgb(113 113 122)">
                    $2,87
                  </Text>
                  <Text fontSize="xs" color="#b4b4b4">
                    x4
                  </Text>
                </HStack>
                <Text fontSize="sm">$11,48</Text>
              </Flex>
            </Box>
          </HStack>
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
            Payment Methods
          </Text>
          <Grid gap={2} templateColumns="repeat(3, 1fr)">
            {payments.map((item) => {
              return (
                <GridItem key={item.id}>
                  <Button
                    w="100%"
                    h="auto"
                    color="text.300"
                    bgColor="gray.100"
                    rounded="lg"
                    px={2}
                    py={4}
                    display="flex"
                    flexDirection="column"
                  >
                    <IconButton
                      aria-label="payment"
                      icon={item.icon}
                      background="none"
                      color="black"
                    />
                    <Text color="green">{item.name}</Text>
                  </Button>
                  <Radio value="1" visibility="hidden">
                    First
                  </Radio>
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

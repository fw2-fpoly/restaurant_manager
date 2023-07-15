import React from "react";
import {
  Box,
  Center,
  Flex,
  Spacer,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import { Button, Img } from "@chakra-ui/react";
import { BellIcon, IconChat } from "~/components/Icons";
import BreadcrumbHome from "./component/BreadcrumbHome";
import SearchBar from "./component/SearchBar";

type Props = {};

const Header = (props: Props) => {
  return (
    <Flex justifyContent="space-between" w="100%" alignItems="center">
      <BreadcrumbHome />
      <Spacer />
      <Flex
        w={{ md: "50%" }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* <SearchBar /> */}
        <Spacer />
        <Flex
          w={{ md: "30%" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={14}>Hello, UserName</Text>
          <Button
            bg="gray.100"
            rounded="full"
            p={2}
            color="black.500"
            _hover={{ bg: "primary.100", color: "white" }}
            fontWeight={400}
          >
            <IconChat boxSize={6} />
          </Button>

          <Button
            bg="gray.100"
            rounded="full"
            p={2}
            color="black.500"
            _hover={{ bg: "primary.100", color: "white" }}
            fontWeight={400}
          >
            <BellIcon boxSize={6} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

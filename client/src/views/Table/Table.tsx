import React from "react";
import {
  Tag,
  Center,
  Button,
  Box,
  Text,
  IconButton,
  FormControl,
} from "@chakra-ui/react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import { Grid, GridItem, Flex, Spacer } from "@chakra-ui/layout";
import CardTable from "./components/CardTable";
import { dataTable } from ".";
import { SearchIcon } from "~/components/Icons";

type Props = {};

const TableView = (props: Props) => {
  return (
    <Box my={10}>
      <Text fontSize="2xl" my={2}>
        Choose Table
      </Text>
      <Grid gap={4} gridTemplateColumns="repeat(5,1fr)">
        <GridItem
          colSpan={4}
          p={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex
            w="100%"
            borderRadius="16px"
            gap={4}
            flexWrap="wrap"
            bgColor="white"
            my={8}
            py={4}
          >
            {dataTable.map((item) => {
              return <CardTable item={item} key={item.id} />;
            })}
          </Flex>
          <Grid
            w="50%"
            gridTemplateColumns="repeat(5,1fr)"
            bgColor="white"
            borderRadius="8px"
            p={4}
          >
            <GridItem>
              <Text>Table</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center">
              <IconButton
                aria-label="status"
                bgColor="blue"
                border="1px"
                w={5}
                h={5}
                borderRadius="8px"
              />
              <Text mx={2}> Free</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center">
              <IconButton
                aria-label="status"
                bgColor="yellow"
                border="1px"
                w={5}
                h={5}
                borderRadius="8px"
              />
              <Text mx={2}>Reserved</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center">
              <IconButton
                aria-label="status"
                bgColor="red"
                border="1px"
                w={5}
                h={5}
                borderRadius="8px"
              />
              <Text mx={2}>Checked-in</Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            w="100%"
            bgColor="white"
            borderRadius="16px"
            height="100%"
            p={4}
          >
            <FormControl>
              <InputGroup w="100%">
                <Input
                  placeholder="Tìm kiếm"
                  borderRadius="8px"
                  bgColor="gray.100"
                  border="none"
                />
                <InputRightElement>
                  <Button
                    _hover={{
                      bg: "primary.100",
                      color: "#ccc",
                      borderRadius: "full",
                    }}
                    size="md"
                    borderRadius="full"
                    bg="none"
                    color="blackAlpha.600"
                  >
                    <Flex justifyItems="center">
                      <SearchIcon size={22} />
                    </Flex>
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Flex gap={4} my={4}>
              <Button size="sm" borderRadius={8} bgColor={"green.300"}>
                Reserved (6)
              </Button>
              <Button size="sm" borderRadius={8} bgColor={"green.300"}>
                Checked-in (3)
              </Button>
              <Spacer />
            </Flex>
            <Box w="100%" height={"70%"} >
              <Text>6:30</Text>
              <Box>
                <Flex
                  w="100%"
                  bgColor={"gray.100"}
                  alignItems="center"
                  p={2}
                  borderRadius={12}
                  justifyContent="space-around"
                  my={2}
                >
                  <Button
                    px={4}
                    py={3}
                    bgColor={"gray.200"}
                    borderRadius={12}
                    color="black"
                    fontSize={16}
                  >
                    T1
                  </Button>
                  <Text>Jhon ciena</Text>
                  <Text color="gray.400" size="sm">
                    5 person
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box w="100%">
              <Button
                px={3}
                py={4}
                w="100%"
                color="black"
                bgColor="none"
                border="1px solid green"
                borderRadius={8}
              >
                Close
              </Button>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TableView;

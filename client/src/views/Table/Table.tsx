import React, { useState } from "react";
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
import DetailTable from "./components/DetailTable";

type Props = {};

const TableView = (props: Props) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpenDetailTable = (id: string | any) => {
    console.log(id);
    setOpen(false);
  };
  const handleCloseDetailTable = () => {
    setOpen(true);
  }
  return (
    <Box my={10}>
      <Grid gap={4} gridTemplateColumns="repeat(7,1fr)">
        <GridItem
          colSpan={open ? 7 : 5}
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <Flex
            w="100%"
            borderRadius="8px"
            gap={4}
            bgColor="white"
            justifyContent={"space-between"}
            alignItems={"center"}
            px={2}
          >
            <Box w="50%">
              <Text fontSize="2xl" my={2}>
                Choose Table
              </Text>
            </Box>
            <FormControl w="50%">
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
          </Flex>

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
              return <CardTable item={item} key={item.id} handleOpenDetailTable={handleOpenDetailTable}/>;
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
                bgColor="yellow"
                border="1px"
                w={5}
                h={5}
                borderRadius="8px"
              />
              <Text mx={2}>Free</Text>
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

        <GridItem colSpan={2} display={open ? "none" : "block"}>
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
            <Box>
              <DetailTable handleCloseDetailTable={handleCloseDetailTable}/>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TableView;

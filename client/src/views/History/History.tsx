import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SearchIconHistory } from "~/components/Icons";

import { Grid, GridItem } from "@chakra-ui/react";
import TableHistory from "./components/TableHistory";
import BoxDetailHistory from "./components/BoxDetailHistory";

type Props = {};

const HistoryView = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [showDetail, setShowDetail] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChange = (event: any) => setValue(event.target.value);
  const handleClick = (event: any) => {
    console.log("abc");
  };
  const handleChangeShowDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <Center>
      {loading ? (
        <Box>Loading...</Box>
      ) : (
        <Grid templateColumns="repeat(3,1fr)" gap={6} width="full">
          <GridItem
            w="full"
            h="full"
            background="#ffffff"
            colSpan={showDetail ? 3 : 2}
            borderRadius={8}
            boxShadow="md"
          >
            <Flex>
              <Box w="50%" p={4}>
                <InputGroup size="md" borderRadius="8px" boxShadow="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Search Order id"
                    background="#FAFAFA"
                    border="none"
                  />
                  <InputRightElement width="4rem">
                    <IconButton
                      fontSize="20px"
                      colorScheme="blue"
                      aria-label="Search database"
                      icon={<SearchIconHistory />}
                      backgroundColor="none"
                      color="black"
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box p="4">
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="date"
                  boxShadow="md"
                  border="none"
                  background="#FAFAFA"
                />
              </Box>
            </Flex>
            <Box mt={4} p="4">
              <TableHistory handleChangeShowDetail={handleChangeShowDetail} />
            </Box>
          </GridItem>
          <GridItem colSpan={1} display={showDetail ? "none" : "block"}>
            <BoxDetailHistory setShowDetail={setShowDetail} />
          </GridItem>
        </Grid>
      )}
    </Center>
  );
};

export default HistoryView;

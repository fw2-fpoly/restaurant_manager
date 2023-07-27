import { Box, Flex, Grid, GridItem, Text, Spacer } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import CardOrder from "./components/CardOrder";
import DetailOrder from "./components/DetailOrder";
import { useState } from "react";

type Props = {};

const KitChen = (props: Props) => {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const handleOpen =(id:string)=>{
    setOpenDetail(true);
  }
  return (
    <Box my={10}>
      <Box my={4}>
        <Flex gap={4}>
          <Button bgColor="#ff666d1a" color="primary.100" rounded="lg">
            On-process
          </Button>

          <Button color="text.300" bgColor="#dbdbd6" rounded="lg">
            Completed
          </Button>
        </Flex>
      </Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={8}>
        <GridItem colSpan={openDetail ? 8 : 12}>
          <Box>
            <Grid gap="6" templateColumns="repeat(4, 1fr)">
              <GridItem>
                <CardOrder handleOpen={handleOpen}/>
              </GridItem>
              <GridItem>
                <CardOrder handleOpen={handleOpen}/>
              </GridItem>
              <GridItem>
                <CardOrder handleOpen={handleOpen}/>
              </GridItem>
              <GridItem>
                <CardOrder handleOpen={handleOpen}/>
              </GridItem>
              <GridItem>
                <CardOrder handleOpen={handleOpen}/>
              </GridItem>
              <GridItem>
                <CardOrder handleOpen={handleOpen}/>
              </GridItem>
              <GridItem>
                <CardOrder handleOpen={handleOpen}/>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>

        <GridItem borderRadius="18px" colSpan={4} padding="18px" bg="white" display={openDetail ? 'block' : 'none'}>
          <DetailOrder />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default KitChen;

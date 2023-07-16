import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Grid, GridItem, Select } from "@chakra-ui/react";
import { IconFilter } from "~/components/Icons";

type Props = {};

const Filter = (props: Props) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} my={4}>
      <GridItem w="100%">
        <Select placeholder="Tên" bg="white" border="none">
          <option value="option1">A-Z</option>
          <option value="option2">Z-A</option>
        </Select>
      </GridItem>
      <GridItem w="100%">
        <Select placeholder="Giá" bg="white" border="none">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </GridItem>
      <GridItem w="100%">
        <Select placeholder="Tên" bg="white" border="none">
          <option value="option1">A-Z</option>
          <option value="option2">Z-A</option>
        </Select>
      </GridItem>
    </Grid>
  );
};

export default Filter;

import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import FilterGroup from "./components/FilterGroup";
import OrderList from "./components/OrderList";

type Props = {};

const KitchenView = (props: Props) => {
  const [filter, setFilter] = useState("");

  return (
    <Box rounded="8px" bg="#fff" p="16px">
      <FilterGroup filter={filter} setFilter={setFilter} />
      <OrderList filter={filter} />
    </Box>
  );
};

export default KitchenView;

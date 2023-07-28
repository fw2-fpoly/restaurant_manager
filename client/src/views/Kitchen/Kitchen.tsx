import { Box, Flex, Grid, GridItem, Text, Spacer } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import FilterGroup from "./components/FilterGroup";
import OrderList from "./components/OrderList";

type Props = {};

const KitchenView = (props: Props) => {
	const [filter, setFilter] = useState("");

	return (
		<Box
			rounded="sm"
			bg="#fff"
			p={6}
			mt={8}
		>
			<FilterGroup
				filter={filter}
				setFilter={setFilter}
			/>
			<OrderList filter={filter} />
		</Box>
	);
};

export default KitchenView;

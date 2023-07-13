import { Box } from "@chakra-ui/layout";
import { Image, Input } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Order = (props: Props) => {
	return (
		<Box display={"flex"} marginY={"20px"} paddingX={"20px"}>
			<Image
				src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/16.png"
				w={"80px"}
				h={"80px"}
				borderRadius={"full"}
			/>
			<Box paddingX={"20px"}>
				<Box as={"p"}>PIZZA</Box>
				<Input type="number" w={"30px"} h={"20px"} paddingX={"-0.5"}></Input>
			</Box>
			<Box>100$</Box>
		</Box>
	);
};

export default Order;

import { Box } from "@chakra-ui/layout";
import { Button, CloseButton } from "@chakra-ui/react";
import React from "react";
import Order from "./component/order";

type Props = {
	display: boolean;
	openCurrent: any;
};

const CurrentOder = (props: Props) => {
	return (
		<Box
			display={props.display === false ? "none" : "inline-block"}
			bg={"white"}
			marginLeft={"50px"}
			w={"400px"}
			borderRadius={"md"}
			h={"full"}
		>
			<Box justifyContent={"end"}>
				<CloseButton as={"button"} size="md" onClick={() => props.openCurrent(false)} />
			</Box>
			<form action="">
				<Box>
					<Order />
					<Order />
					<Order />
					<Order />
					<Order />
					<Order />
				</Box>
				<Box display={"flex"} justifyContent={"space-between"}>
					<Box as="p" fontSize={"lg"}>
						Tổng Tiền:{" "}
					</Box>
					<Box as={"p"} fontSize={"lg"} color={"red.400"}>
						600$
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default CurrentOder;

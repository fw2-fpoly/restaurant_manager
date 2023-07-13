import React from "react";

import {
	Box,
	Button,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { Heart, Plus, Start } from "../Icons";
type Props = {
	product: any;
	openCurrent: any;
	currentOrder: any;
};

const ProductCard = (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box key={props.product.id}>
			<Box
				textAlign={"center"}
				alignItems={"center"}
				justifyContent={"center"}
				backgroundColor={"white"}
				borderRadius={"3xl"}
				marginY={"50px"}
				_hover={{
					backgroundColor: "#EC8069",
				}}
			>
				<Box
					marginTop={"5"}
					overflow={"hidden"}
					display={"flex"}
					justifyContent={"center"}
					borderRadius={"full"}
					position={"relative"}
					top={"-50px"}
					_hover={{
						animationPlayState: "running",
						animation: "spin 20s linear infinite",
					}}
					__css={{
						"@keyframes spin": {
							"0%": {
								transform: "rotate(0deg)",
							},
							"100%": {
								transform: "rotate(360deg)",
							},
						},
					}}
				>
					<Image borderRadius={"full"} w={"52"} src={props.product.image}></Image>
				</Box>
				<Box as={"h1"} paddingBottom={"-2"} onClick={onOpen}>
					{props.product.name}
				</Box>
				<Box as="p" color={"orange.300"} paddingY={"2"}>
					{props.product.price}$
				</Box>
				<Box display={"flex"} textAlign={"center"} justifyContent={"center"}>
					<Start />
					<Start />
					<Start />
					<Start />
					<Start />
				</Box>
				<Box display={"flex"} justifyContent={"space-between"} paddingX={"2"} paddingBottom={"2"}>
					<Box as={Button} w={"50px"} h={"50px"} borderRadius={"3xl"} _hover={{ backgroundColor: "white" }}>
						<Heart _hover={{ color: "red" }} />
					</Box>
					<Box
						as={Button}
						w={"50px"}
						h={"50px"}
						borderRadius={"3xl"}
						onClick={() => props.currentOrder(props.product)}
						_hover={{ backgroundColor: "white" }}
					>
						<Plus _hover={{ color: "red" }} />
					</Box>
				</Box>
			</Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{props.product.name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody textAlign={"center"}>
						<Image src={props.product.image}></Image>
						<Box as={"h1"}>{props.product.name}</Box>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							variant="ghost"
							onClick={() => {
								onClose();
								props.openCurrent(true);
							}}
						>
							Đặt món
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default ProductCard;

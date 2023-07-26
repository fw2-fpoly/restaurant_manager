import { Box, Flex, GridItem, Spacer, Text } from "@chakra-ui/layout";
import { Button, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { IconAddCart, IconHeart } from "~/components/Icons";

type Props = {
	handleAddProduct?: () => void;
};

const CardProduct = ({ handleAddProduct }: Props) => {
	return (
		<GridItem
			cursor="pointer"
			position="relative"
			rounded="sm"
			overflow="hidden"
			pt="full"
			onClick={handleAddProduct}
		>
			<Box
				backgroundImage="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
				backgroundRepeat="no-repeat"
				backgroundPosition="center"
				backgroundSize="cover"
				pb="100%"
				rounded="sm"
			/>
			<Card
				position="absolute"
				top={0}
				right={0}
				w="100%"
				h="100%"
				p={4}
				rounded="sm"
				overflow="hidden"
				bgColor="rgba(0,0,0,0.3)"
				transition="all 0.25s ease"
				_hover={{
					bgColor: "rgba(0,0,0,0)",
				}}
			>
				<Flex>
					<Spacer />
					<Button
						w={7}
						h={7}
						p={0}
						bg="gray.100"
						rounded="full"
						color="black.500"
					>
						<IconHeart
							boxSize={4}
							color="black"
						/>
					</Button>
				</Flex>
				<CardBody p={0}>
					<Text
						color="white"
						fontSize="md"
					>
						Bò xào tái
					</Text>
				</CardBody>
				<CardFooter
					p={0}
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Button
						rounded="full"
						color="black"
						size="small"
						fontWeight={600}
						bgColor="gray.100"
					>
						100.000 VNĐ
					</Button>
					<Button
						w={10}
						h={10}
						color="black"
						rounded="full"
						bgColor="gray.100"
					>
						<IconAddCart
							boxSize={4}
							color="black"
						/>
					</Button>
				</CardFooter>
			</Card>
		</GridItem>
	);
};

export default CardProduct;

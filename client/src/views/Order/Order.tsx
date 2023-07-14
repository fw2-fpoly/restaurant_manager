import { Box, Flex, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";

type Props = {};

const OrderView = (props: Props) => {
	return (
		<Grid
			templateColumns="repeat(12, 1fr)"
			gap={8}
		>
			<GridItem colSpan={8}>
				<Box>
					<HStack>
						<Button
							bgColor="#ff666d1a"
							color="primary.100"
							rounded="full"
						>
							On-process
						</Button>
						<Button
							color="text.300"
							bgColor="#dbdbd6"
							rounded="full"
						>
							Completed
						</Button>
					</HStack>
					<Grid
						marginY="32px"
						gap="6"
					>
						<GridItem>
							<Box
								bg="#fff"
								w="100%"
								padding="18px"
								borderRadius="18px"
								_hover={{
									border: "2px solid #ff666d",
									transform: "scale(1.01)",
								}}
								cursor="pointer"
								boxSizing="border-box"
								transition="transform 0.3s ease-in"
							>
								<Flex justifyContent="space-between">
									<Box borderRadius="40px">
										<Text>Orders: #545345</Text>
										<Text>Table: 11</Text>
										<Text color="#b4b4b4">Qta: 7</Text>
									</Box>
									<Box>
										<Text
											color="#b4b4b4"
											textAlign="end"
										>
											20:30pm
										</Text>
										<HStack marginTop="18px">
											<Box>$40,49</Box>
											<Button
												bgColor="#47B649"
												rounded="full"
												width="66px"
												height="24px"
											>
												Dine-In
											</Button>
										</HStack>
									</Box>
								</Flex>
							</Box>
						</GridItem>
						<GridItem>
							<Box
								bg="#fff"
								w="100%"
								padding="18px"
								borderRadius="18px"
								_hover={{
									border: "2px solid #ff666d",
									transform: "scale(1.01)",
								}}
								cursor="pointer"
								boxSizing="border-box"
								transition="transform 0.3s ease-in"
							>
								<Flex justifyContent="space-between">
									<Box borderRadius="40px">
										<Text>Orders: #545345</Text>
										<Text>Table: 11</Text>
										<Text color="#b4b4b4">Qta: 7</Text>
									</Box>
									<Box>
										<Text
											color="#b4b4b4"
											textAlign="end"
										>
											20:30pm
										</Text>
										<HStack marginTop="18px">
											<Box>$40,49</Box>
											<Button
												bgColor="#47B649"
												rounded="full"
												width="66px"
												height="24px"
											>
												Dine-In
											</Button>
										</HStack>
									</Box>
								</Flex>
							</Box>
						</GridItem>
						<GridItem>
							<Box
								bg="#fff"
								w="100%"
								padding="18px"
								borderRadius="18px"
								_hover={{
									border: "2px solid #ff666d",
									transform: "scale(1.01)",
								}}
								cursor="pointer"
								boxSizing="border-box"
								transition="transform 0.3s ease-in"
							>
								<Flex justifyContent="space-between">
									<Box borderRadius="40px">
										<Text>Orders: #545345</Text>
										<Text>Table: 11</Text>
										<Text color="#b4b4b4">Qta: 7</Text>
									</Box>
									<Box>
										<Text
											color="#b4b4b4"
											textAlign="end"
										>
											20:30pm
										</Text>
										<HStack marginTop="18px">
											<Box>$40,49</Box>
											<Button
												bgColor="#47B649"
												rounded="full"
												width="66px"
												height="24px"
											>
												Dine-In
											</Button>
										</HStack>
									</Box>
								</Flex>
							</Box>
						</GridItem>
						<GridItem>
							<Box
								bg="#fff"
								w="100%"
								padding="18px"
								borderRadius="18px"
								_hover={{
									border: "2px solid #ff666d",
									transform: "scale(1.01)",
								}}
								cursor="pointer"
								boxSizing="border-box"
								transition="transform 0.3s ease-in"
							>
								<Flex justifyContent="space-between">
									<Box borderRadius="40px">
										<Text>Orders: #545345</Text>
										<Text>Table: 11</Text>
										<Text color="#b4b4b4">Qta: 7</Text>
									</Box>
									<Box>
										<Text
											color="#b4b4b4"
											textAlign="end"
										>
											20:30pm
										</Text>
										<HStack marginTop="18px">
											<Box>$40,49</Box>
											<Button
												bgColor="#47B649"
												rounded="full"
												width="66px"
												height="24px"
											>
												Dine-In
											</Button>
										</HStack>
									</Box>
								</Flex>
							</Box>
						</GridItem>
						<GridItem>
							<Box
								bg="#fff"
								w="100%"
								padding="18px"
								borderRadius="18px"
								_hover={{
									border: "2px solid #ff666d",
									transform: "scale(1.01)",
								}}
								cursor="pointer"
								boxSizing="border-box"
								transition="transform 0.3s ease-in"
							>
								<Flex justifyContent="space-between">
									<Box borderRadius="40px">
										<Text>Orders: #545345</Text>
										<Text>Table: 11</Text>
										<Text color="#b4b4b4">Qta: 7</Text>
									</Box>
									<Box>
										<Text
											color="#b4b4b4"
											textAlign="end"
										>
											20:30pm
										</Text>
										<HStack marginTop="18px">
											<Box>$40,49</Box>
											<Button
												bgColor="#47B649"
												rounded="full"
												width="66px"
												height="24px"
											>
												Dine-In
											</Button>
										</HStack>
									</Box>
								</Flex>
							</Box>
						</GridItem>
					</Grid>
				</Box>
			</GridItem>
			<GridItem
				borderRadius="18px"
				colSpan={4}
				padding="18px"
				bg="white"
			>
				<Box>
					<Flex justifyContent="space-between">
						<Box>
							<Text color="#b4b4b4">Orders ID</Text>
							<Text>#534534</Text>
						</Box>
						<Box>
							<Text color="#b4b4b4">Table</Text>
							<Text textAlign="end">T1</Text>
						</Box>
					</Flex>
				</Box>
				<Box marginTop="10px">
					<HStack
						alignItems="flex-start"
						paddingY="14px"
						borderBottom="1px solid  rgb(228 228 231)"
					>
						<Box
							width="20%"
							borderRadius="16px"
							overflow="hidden"
							marginTop="6px"
						>
							<Image
								src="https://i.pinimg.com/originals/60/10/4a/60104a06b2c5da9e7ab683b3d6cfdd15.jpg"
								alt="Anh do an"
							></Image>
						</Box>
						<Box width="80%">
							<Text
								fontSize="md"
								fontWeight="800"
							>
								Orange Juice
							</Text>
							<Text
								fontSize="xs"
								mt="2px"
								color="#b4b4b4"
							>
								Note: Less ice
							</Text>
							<Text
								fontSize="xs"
								mt="2px"
								color="#b4b4b4"
							>
								Extras: Extra Mazaredo
							</Text>
							<Flex
								justifyContent="space-between"
								marginTop="10px"
							>
								<HStack>
									<Text
										fontSize="sm"
										color="rgb(113 113 122)"
									>
										$2,87
									</Text>
									<Text
										fontSize="xs"
										color="#b4b4b4"
									>
										x4
									</Text>
								</HStack>
								<Text fontSize="sm">$11,48</Text>
							</Flex>
						</Box>
					</HStack>
				</Box>
				<Box paddingY="26px">
					<Box
						borderBottom="1px solid  rgb(248 250 252)"
						paddingBottom="10px"
					>
						<Flex justifyContent="space-between">
							<Text
								fontSize="xs"
								color="#D0D0D0"
							>
								Items(7)
							</Text>
							<Text fontSize="sm">$28,67</Text>
						</Flex>
						<Flex
							justifyContent="space-between"
							marginTop="10px"
						>
							<Text
								fontSize="xs"
								color="#D0D0D0"
							>
								Tax(10%)
							</Text>
							<Text fontSize="sm">$2,86</Text>
						</Flex>
					</Box>
					<Flex
						justifyContent="space-between"
						marginTop="24px"
					>
						<Text
							fontSize="xs"
							color="#D0D0D0"
						>
							Total
						</Text>
						<Text fontSize="sm">$31,53</Text>
					</Flex>
					<Box>
						<Text
							fontSize="lg"
							my="4"
						>
							Payment Methods
						</Text>
						<Flex justifyContent="space-between">
							<Button
								color="text.300"
								bgColor="#dbdbd6"
								rounded="full"
								size="sm"
							>
								Cash
							</Button>
							<Button
								bgColor="#ff666d1a"
								color="primary.100"
								rounded="full"
								size="sm"
							>
								Debit Card
							</Button>
							<Button
								color="text.300"
								bgColor="#dbdbd6"
								rounded="full"
								size="sm"
							>
								E-welet
							</Button>
						</Flex>
						<Button
							color="white"
							bgColor="primary.100"
							rounded="12px"
							mt="26px"
							w="full"
						>
							Pay Bills
						</Button>
					</Box>
				</Box>
			</GridItem>
		</Grid>
	);
};

export default OrderView;

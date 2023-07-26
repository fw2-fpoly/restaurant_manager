import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";

type Props = {
	handleClose?: () => void;
};

const DetailOrder = ({ handleClose }: Props) => {
	return (
		<Box>
			<Box>
				<Flex
					fontSize="sm"
					alignItems="center"
					justifyContent="space-between"
				>
					<Flex
						direction="column"
						gap={1}
					>
						<Text
							color="text.300"
							fontWeight={600}
						>
							Mã đơn hàng
						</Text>
						<Text
							color="text.200"
							fontWeight={500}
						>
							#534534
						</Text>
					</Flex>
					<Flex
						direction="column"
						gap={1}
					>
						<Text
							color="text.300"
							fontWeight={600}
						>
							Bàn
						</Text>
						<Text
							color="text.200"
							fontWeight={500}
							textAlign="end"
						>
							T1
						</Text>
					</Flex>
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
						rounded="sm"
						overflow="hidden"
						marginTop="6px"
					>
						<Image
							src="https://i.pinimg.com/originals/60/10/4a/60104a06b2c5da9e7ab683b3d6cfdd15.jpg"
							alt="Anh do an"
						/>
					</Box>
					<Box width="80%">
						<Text
							fontSize="sm"
							fontWeight={600}
						>
							Orange Juice
						</Text>
						<Text
							mt="2px"
							fontSize="xs"
							color="text.300"
							fontWeight={600}
						>
							Note: Less ice
						</Text>
						<Text
							mt="2px"
							fontSize="xs"
							color="text.300"
							fontWeight={600}
						>
							Extras: Extra Mazaredo
						</Text>
						<Flex
							justifyContent="space-between"
							mt={2}
						>
							<HStack>
								<Text
									fontSize="xs"
									color="text.200"
								>
									100.000 VNĐ
								</Text>
								<Text
									fontSize="xs"
									color="text.300"
								>
									x4
								</Text>
							</HStack>
							<Text
								fontSize="sm"
								fontWeight={600}
							>
								400.000 VNĐ
							</Text>
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
							color="text.300"
						>
							Số lượng (7)
						</Text>
						<Text
							fontSize="sm"
							color="text.200"
							fontWeight={600}
						>
							100.000 VNĐ
						</Text>
					</Flex>
					<Flex
						justifyContent="space-between"
						marginTop="10px"
					>
						<Text
							fontSize="xs"
							color="text.300"
						>
							Giảm giá
						</Text>
						<Text
							fontSize="sm"
							color="text.200"
							fontWeight={600}
						>
							40.000 VNĐ
						</Text>
					</Flex>
				</Box>
				<Flex
					justifyContent="space-between"
					marginTop="24px"
				>
					<Text
						fontSize="md"
						color="text.300"
						fontWeight={600}
					>
						Tổng tiền
					</Text>
					<Text
						fontSize="md"
						color="text.200"
					>
						3.999.999 VNĐ
					</Text>
				</Flex>
				<Box>
					<Text
						fontSize="md"
						mt={6}
						mb={4}
					>
						Phương thức thanh toán
					</Text>
					<Flex gap={6}>
						<Button
							size="small"
							color="text.300"
							bgColor="#343a40"
							p={4}
						>
							<Text
								color="white"
								fontWeight={500}
							>
								Thẻ Visa
							</Text>
						</Button>
						<Button
							size="small"
							color="text.300"
							bgColor="#343a40"
							p={4}
						>
							<Text
								color="white"
								fontWeight={500}
							>
								Thanh toán VNPAY
							</Text>
						</Button>
						<Button
							size="small"
							color="text.300"
							bgColor="#343a40"
							p={4}
						>
							<Text
								color="white"
								fontWeight={500}
							>
								Thanh toán MOMO
							</Text>
						</Button>
					</Flex>
					<Flex
						mt={8}
						alignItems={"center"}
						gap={4}
					>
						<Button w="full">Thanh Toán</Button>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};

export default DetailOrder;

import React from "react";
import { Heading, Text, Box } from "@chakra-ui/layout";
import { Card, CardHeader, CardBody, CardFooter, Button, Img } from "@chakra-ui/react";
import { IconEye } from "~/components/Icons";
type Props = {};

const CardNews = (props: Props) => {
	return (
		<Box
			position="relative"
			h="full"
			cursor="pointer"
		>
			<Box
				position="absolute"
				top={0}
				right={0}
				w="full"
				h="full"
			>
				<Img
					w="full"
					h="full"
					borderRadius="base"
					objectFit="cover"
					src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-nhat-ban-dep.jpg"
					alt="thunbnail"
				/>
			</Box>
			<Card
				width="full"
				height="full"
				rounded="base"
				bgColor="rgba(0,0,0,0.3)"
				_hover={{
					bgColor: "rgba(0,0,0,0)",
				}}
				transition="all 0.25s ease"
			>
				<CardHeader
					px={6}
					py={8}
				>
					<Heading
						as="h2"
						color="white"
						fontSize="md"
						fontWeight={600}
					>
						Nhà Hàng Bị Bóc Pốtttt 🎉🎉🎉
					</Heading>
				</CardHeader>
				<CardBody
					px={6}
					py={0}
				>
					<Text
						color="white"
						fontSize="sm"
						fontWeight={500}
					>
						Mới đây, khách hàng tố một nhà hàng Nhật FPT Polytechic ở (TP.HN) gọi món hơn 1 tiếng rưỡi vẫn
						chưa mang ra còn nhân viên thì cãi tay đôi, đánh đuổi
					</Text>
				</CardBody>
			</Card>
		</Box>
	);
};

export default CardNews;

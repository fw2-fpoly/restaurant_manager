import React, { useState } from "react";
import { NavLink, Link as ReactLink } from "react-router-dom";
import { Button, Img } from "@chakra-ui/react";
import { Box, Flex, Center, Text, Link } from "@chakra-ui/layout";
import { LogoIcon, HomeIcon, BellIcon, CartIcon, MenuIcon, SettingIcon, TableIcon } from "../Icons";

type Props = {};

interface ILinks {
	title: string;
	path: string;
	icon: any;
}

const links: ILinks[] = [
	{
		title: "Trang Chủ",
		path: "/",
		icon: HomeIcon,
	},
	{
		title: "Bàn",
		path: "/table",
		icon: TableIcon,
	},
	{
		title: "Menu",
		path: "/menu",
		icon: MenuIcon,
	},
	{
		title: "Đơn Hàng",
		path: "/orders",
		icon: CartIcon,
	},
	{
		title: "Lịch Sử",
		path: "/history",
		icon: LogoIcon,
	},
	{
		title: "Thông Báo",
		path: "/notification",
		icon: BellIcon,
	},
	{
		title: "Cài Đặt",
		path: "/settings",
		icon: SettingIcon,
	},
];

const Sidebar = (props: Props) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<Flex
			w="full"
			h="full"
			gap={8}
			direction="column"
		>
			<Center>
				<Box>
					<LogoIcon
						boxSize={10}
						color="primary.100"
					/>
				</Box>
			</Center>
			<Flex
				flex={1}
				direction="column"
				align="center"
				gap={4}
			>
				{links?.map((link: ILinks, index: number) => {
					const Icon = link.icon;
					return (
						<Link
							as={NavLink}
							to={link.path}
							key={index}
							role="group"
							w="full"
							gap={1}
							rounded={8}
							transition="all 0.25s ease"
							_hover={{
								bg: "#ea6a121a",
								textDecoration: "none",
							}}
							_activeLink={{
								"& button": {
									color: "primary.100",
									bgColor: "#ea6a121a",
								},
								"& svg": {
									color: "primary.100",
								},
							}}
						>
							<Button
								w="full"
								size="lager"
								color="text.300"
								fontWeight="semibold"
								textDecoration="none"
								bgColor="white"
								justifyContent="flex-start"
								_groupHover={{
									color: "primary.100",
									bgColor: "#ea6a121a",
								}}
								_groupActive={{
									color: "primary.100",
									bgColor: "#ea6a121a",
								}}
								leftIcon={
									<Icon
										boxSize="5"
										color="text.300"
										_groupHover={{
											color: "primary.100",
										}}
										_groupActive={{
											color: "primary.100",
										}}
									/>
								}
							>
								{link.title}
							</Button>
						</Link>
					);
				})}
			</Flex>
			<Center>
				<Link
					as={ReactLink}
					to="/profile"
				>
					<Img
						borderRadius="full"
						boxSize="54px"
						objectFit="cover"
						objectPosition="top"
						src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
					/>
				</Link>
			</Center>
		</Flex>
	);
};

export default Sidebar;

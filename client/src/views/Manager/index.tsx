import { Link, Box, Button, Grid, Heading, Img, Stack, Text, GridItem } from "@chakra-ui/react";
import { Outlet, Link as ReactRouteLink } from "react-router-dom";
import { UserIcon, PassIcon, LogoutIcon, BankIcon, PizzaIcon, CateIcon } from "~/components/Icons";
type Props = {};

interface ILinks {
	title: string;
	path: string;
	icon: any;
}

const links: ILinks[] = [
	{
		title: "Thống kê",
		path: "/manager/dashboard",
		icon: BankIcon,
	},
	{
		title: "Quản lí sản phẩm",
		path: "/manager/products",
		icon: PizzaIcon,
	},
	{
		title: "Quản lí danh mục",
		path: "/manager/cates",
		icon: CateIcon,
	},
	{
		title: "Quản lí nhân viên",
		path: "/manager/staff",
		icon: UserIcon,
	},
];

const Manager = (props: Props) => {
	return (
		<Grid
			templateColumns="repeat(12, 1fr)"
			gap="6"
			mt="8"
			mx="3"
			h="100vh"
		>
			{/* Box 1 */}
			<GridItem colSpan={3}>
				<Box
					h="full"
					p={8}
					bgColor="white"
					rounded="sm"
				>
					<Img
						borderRadius="full"
						boxSize="160px"
						objectFit="cover"
						objectPosition="top"
						mx="auto"
						my="auto"
						src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
					/>
					<Stack
						mt="6"
						spacing="3"
					>
						<Heading
							size="md"
							mx="auto"
						>
							Rose Sadan
						</Heading>
						<Text
							mx="auto"
							fontSize="sm"
							fontWeight="semibold"
						>
							Quản lí
						</Text>

						<Box mt={4}>
							{links?.map((link: ILinks, index: number) => {
								const Icon = link.icon;
								return (
									<Link
										as={ReactRouteLink}
										to={link.path}
										key={index}
										role="group"
										w="full"
										gap={1}
										rounded={8}
										transition="all 0.25s ease"
										_hover={{
											bg: "primary.background",
											textDecoration: "none",
										}}
										_activeLink={{
											"& button": {
												color: "primary.font",
												bgColor: "primary.background",
											},
											"& svg": {
												color: "primary.font",
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
												color: "primary.font",
												bgColor: "primary.background",
											}}
											_groupActive={{
												color: "primary.font",
												bgColor: "primary.background",
											}}
											leftIcon={
												<Icon
													boxSize="5"
													color="text.300"
													_groupHover={{
														color: "primary.font",
													}}
													_groupActive={{
														color: "primary.font",
													}}
												/>
											}
										>
											{link.title}
										</Button>
									</Link>
								);
							})}
						</Box>
					</Stack>
				</Box>
			</GridItem>

			{/* Box 2 */}
			<GridItem colSpan={9}>
				<Box
					p={8}
					bgColor={"white"}
				>
					<Outlet />
				</Box>
			</GridItem>
		</Grid>
	);
};

export default Manager;

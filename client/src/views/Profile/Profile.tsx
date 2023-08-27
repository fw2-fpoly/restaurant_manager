import {
	Link,
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Img,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
	GridItem,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/react";
import { Link as ReactRouteLink } from "react-router-dom";
import { UserIcon, PassIcon, LogoutIcon } from "~/components/Icons";
import * as Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

type Props = {};

interface ILinks {
	title: string;
	path: string;
	icon: any;
}

const profileSchema = Joi.object({
	first_name: Joi.string().trim().required().messages({
		"string.empty": "First name không được để trống",
		"any.required": "Trường first name là bắt buộc",
	}),
	last_name: Joi.string().trim().required().messages({
		"string.empty": "Last Name không được để trống",
		"any.required": "Trường last name là bắt buộc",
	}),
	email: Joi.string()
		.trim()
		.email({ tlds: { allow: false } })
		.required()
		.messages({
			"string.email": "Email không đúng định dạng",
			"string.empty": "Email không được để trống",
			"any.required": "Trường email là bắt buộc",
		}),
	address: Joi.string().trim().required().messages({
		"string.empty": "Địa chỉ không được để trống",
		"any.required": "Trường địa chỉ là bắt buộc",
	}),
	phone: Joi.string().trim().required().messages({
		"string.empty": "SDT không được để trống",
		"any.required": "Trường phone là bắt buộc",
	}),
	date: Joi.string().trim().required().messages({
		"string.empty": "Date không được để trống",
		"any.required": "Trường date là bắt buộc",
	}),
	location: Joi.string().trim().required().messages({
		"string.empty": "Vị trí không được để trống",
		"any.required": "Trường vị trí là bắt buộc",
	}),
	code: Joi.string().trim().required().messages({
		"string.empty": "Code không được để trống",
		"any.required": "Trường code là bắt buộc",
	}),
});

const links: ILinks[] = [
	{
		title: "Thông tin tin chung",
		path: "",
		icon: UserIcon,
	},
	{
		title: "Đăng ký  và mật khẩu ",
		path: "",
		icon: PassIcon,
	},
	{
		title: "Đăng xuất",
		path: "/",
		icon: LogoutIcon,
	},
];

const Profile = (props: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: joiResolver(profileSchema),
	});

	const onSubmit = async (data: any) => {
		console.log(data);
	};

	return (
		<Grid
			w="full"
			templateColumns="repeat(12, 1fr)"
			gap="12"
			px="3"
			my="8"
		>
			{/* Box 1 */}
			<GridItem colSpan={3}>
				<Box
					h="full"
					p="8"
					bgColor="white"
				>
					<Img
						borderRadius="full"
						boxSize="120px"
						objectFit="cover"
						objectPosition="center"
						mx="auto"
						my="auto"
						src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
					/>
					<Stack
						mt="6"
						spacing="2"
					>
						<Heading
							size="sm"
							mx="auto"
						>
							Rose Sadan
						</Heading>
						<Text
							mx="auto"
							fontSize="sm"
							mt={1}
						>
							Nhân Viên
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
					<Heading
						size="md"
						mx="auto"
					>
						Rose Sadan
					</Heading>

					<form
						style={{
							width: "100%",
							marginTop: "16px",
						}}
						onSubmit={handleSubmit(onSubmit)}
					>
						<Flex
							direction={"column"}
							gap={4}
						>
							<RadioGroup defaultValue="2">
								<Stack
									spacing={5}
									direction="row"
								>
									<Radio
										colorScheme="orange"
										value="1"
									>
										Nam
									</Radio>
									<Radio
										colorScheme="orange"
										value="2"
									>
										Nữ
									</Radio>
								</Stack>
							</RadioGroup>
							<Flex
								direction="row"
								gap={4}
							>
								<FormControl
									flex={1}
									isInvalid={errors.first_name as any}
								>
									<FormLabel>Họ đệm</FormLabel>
									<Input
										id="first_name"
										type="first_name"
										placeholder="Nguyen F"
										size="lager"
										{...register("first_name")}
									/>
									<FormErrorMessage>
										{(errors.first_name as any) && (errors?.first_name?.message as any)}
									</FormErrorMessage>
								</FormControl>
								<FormControl
									flex={1}
									isInvalid={errors.last_name as any}
								>
									<FormLabel>Tên Đệm</FormLabel>
									<Input
										id="last_name"
										type="text"
										placeholder="Truong..."
										size="lager"
										{...register("lastname")}
									/>
									<FormErrorMessage>
										{(errors.lastname as any) && (errors?.lastname?.message as any)}
									</FormErrorMessage>
								</FormControl>
							</Flex>

							<FormControl
								flex={1}
								isInvalid={errors.email as any}
							>
								<FormLabel>Email</FormLabel>
								<Input
									id="email"
									type="email"
									placeholder="Email"
									size="lager"
									{...register("email")}
								/>
								<FormErrorMessage>
									{(errors.email as any) && (errors?.email?.message as any)}
								</FormErrorMessage>
							</FormControl>

							<FormControl
								flex={1}
								isInvalid={errors.address as any}
							>
								<FormLabel>Địa chỉ</FormLabel>
								<Input
									id="address"
									type="address"
									placeholder="Ba Vi, Ha Nọi"
									size="lager"
									{...register("address")}
								/>
								<FormErrorMessage>
									{(errors.address as any) && (errors?.address?.message as any)}
								</FormErrorMessage>
							</FormControl>

							<Flex
								direction="row"
								gap={4}
							>
								<FormControl
									flex={1}
									isInvalid={errors.phone as any}
								>
									<FormLabel>SĐT</FormLabel>
									<Input
										id="phone"
										type="phone"
										placeholder="012345678"
										size="lager"
										{...register("phone")}
									/>
									<FormErrorMessage>
										{(errors.phone as any) && (errors?.phone?.message as any)}
									</FormErrorMessage>
								</FormControl>
								<FormControl
									flex={1}
									isInvalid={errors.date as any}
								>
									<FormLabel>Ngày sinh</FormLabel>
									<Input
										id="date"
										type="date"
										size="lager"
										{...register("date")}
									/>
									<FormErrorMessage>
										{(errors.date as any) && (errors?.date?.message as any)}
									</FormErrorMessage>
								</FormControl>
							</Flex>

							<FormControl>
								<Button
									type="submit"
									width="full"
								>
									Lưu thông tin
								</Button>
							</FormControl>
						</Flex>
					</form>
				</Box>
			</GridItem>
		</Grid>
	);
};

export default Profile;

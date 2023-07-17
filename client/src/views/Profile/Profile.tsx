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
	firstname: Joi.string().trim().required().messages({
		"string.empty": "First name không được để trống",
		"any.required": "Trường first name là bắt buộc",
	}),
	lastname: Joi.string().trim().required().messages({
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
		title: "Personal Infomation",
		path: "",
		icon: UserIcon,
	},
	{
		title: "Login & Password",
		path: "",
		icon: PassIcon,
	},
	{
		title: "Logout",
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
			gap="6"
			h={"full"}
		>
			{/* Box 1 */}
			<GridItem colSpan={3}>
				<Box
					h={"full"}
					p={5}
					mx={5}
					bgColor={"white"}
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
						<Text mx="auto">Raasi Kash</Text>

						<div>
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
						</div>
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
						my="20px"
					>
						Rose Sadan
					</Heading>

					<form
						style={{
							width: "100%",
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
										Male
									</Radio>
									<Radio
										colorScheme="orange"
										value="2"
									>
										Female
									</Radio>
								</Stack>
							</RadioGroup>
							<Flex
								direction="row"
								gap={4}
							>
								<FormControl
									flex={1}
									isInvalid={errors.firstname as any}
								>
									<FormLabel>First Name</FormLabel>
									<Input
										id="firstname"
										type="firstname"
										placeholder="First Name"
										size="lager"
										{...register("firstname")}
									/>
									<FormErrorMessage>
										{(errors.firstname as any) && (errors?.firstname?.message as any)}
									</FormErrorMessage>
								</FormControl>
								<FormControl
									flex={1}
									isInvalid={errors.lastname as any}
								>
									<FormLabel>Last Name</FormLabel>
									<Input
										id="lastname"
										type="lastname"
										placeholder="Last Name"
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
								<FormLabel>Address</FormLabel>
								<Input
									id="address"
									type="address"
									placeholder="Address"
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
									<FormLabel>Phone number</FormLabel>
									<Input
										id="phone"
										type="phone"
										placeholder="Phone"
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
									<FormLabel>Date of birth</FormLabel>
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

							<Flex
								direction="row"
								gap={4}
							>
								<FormControl
									flex={1}
									isInvalid={errors.location as any}
								>
									<FormLabel>Location</FormLabel>
									<Input
										id="location"
										type="location"
										placeholder="Location"
										size="lager"
										{...register("location")}
									/>

									<FormErrorMessage>
										{(errors.location as any) && (errors?.location?.message as any)}
									</FormErrorMessage>
								</FormControl>
								<FormControl
									flex={1}
									isInvalid={errors.code as any}
								>
									<FormLabel>Postal Code</FormLabel>
									<Input
										id="code"
										type="code"
										placeholder="Postal Code"
										size="lager"
										{...register("code")}
									/>
									<FormErrorMessage>
										{(errors.code as any) && (errors?.code?.message as any)}
									</FormErrorMessage>
								</FormControl>
							</Flex>



							<FormControl >
								<Button
									type="submit"
									width="full"
									size="lager"
									backgroundColor="primary.background"
									color="primary.font"
								>
									Save Changes
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

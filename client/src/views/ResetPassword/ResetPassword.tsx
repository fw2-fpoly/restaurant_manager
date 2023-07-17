import { useForm } from "react-hook-form";
import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ArrowLeftCirleIcon, CodeIcon, GoogleIcon, FacebookIcon } from "~/components/Icons";
import {
	FormErrorMessage,
	FormControl,
	Input,
	Button,
	Center,
	Box,
	Flex,
	Link,
	Stack,
	Heading,
	Text,
	Divider,
	AbsoluteCenter,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

type Props = {};

const registerSchema = Joi.object({
	firstname: Joi.string().required().trim().messages({
		"string.empty": "Không được để trống",
		"any.required": "Trường này bắt buộc phải nhập",
	}),
	lastname: Joi.string().required().trim().messages({
		"string.empty": "Không được để trống",
		"any.required": "Trường này bắt buộc phải nhập",
	}),
	avatar: Joi.any().required().messages({
		"string.empty": "Không được để trống",
		"any.required": "Trường này bắt buộc phải nhập",
	}),
	phone: Joi.string()
		.regex(/^[0-9]{10}$/)
		.required()
		.trim()
		.messages({
			"string.pattern.base": `Số điện thoại không hợp lệ`,
			"string.empty": "Không được để trống",
			"any.required": "Trường này bắt buộc phải nhập",
		}),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.trim()
		.messages({
			"string.email": "Email không hợp lệ",
			"string.empty": "Không được để trống",
			"any.required": "Trường này bắt buộc phải nhập",
		}),
	password: Joi.string().min(6).required().trim().messages({
		"string.empty": "Không được để trống",
		"any.required": "Trường này bắt buộc phải nhập",
		"string.min": "Tối thiểu 6 ký tự",
	}),
	confirmPassword: Joi.any().equal(Joi.ref("password")).required().messages({
		"string.empty": "Không được để trống",
		"any.required": "Trường này bắt buộc phải nhập",
		"any.only": "Mật khẩu không khớp",
	}),
});

const ResetPasswordView = (props: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: joiResolver(registerSchema),
	});

	const onSubmit = async (data: any) => {
		console.log(data);
	};

	return (
		<Center h="full">
			<Flex
				w="460px"
				h="full"
				direction="column"
				pt="8"
			>
				<Box>
					<Link
						as={ReactRouterLink}
						to="/"
					>
						<ArrowLeftCirleIcon boxSize="10" />
					</Link>
				</Box>
				<Stack
					direction="row"
					gap="0"
					pt="8"
					pb="12"
				>
					<Heading
						as="h3"
						color="primary.font"
						size="lg"
						fontWeight="semibold"
					>
						Food
					</Heading>
					<Heading
						as="h3"
						size="lg"
						color="text.200"
						fontWeight="semibold"
						position="relative"
					>
						Dev
						<CodeIcon
							boxSize="5"
							position="absolute"
							color="primary.font"
						/>
					</Heading>
				</Stack>
				<Stack
					direction="column"
					gap="0"
					pb="12"
				>
					<Heading
						as="h3"
						size="lg"
					>
						Quên mật khẩu
					</Heading>
					<Stack
						direction="row"
						pt="2"
					>
						<Text
							fontSize="sm"
							fontWeight="medium"
						>
							Bạn đã có tài khoản?
						</Text>
						<Link
							as={ReactRouterLink}
							to="/login"
							_hover={{
								textDecoration: "none",
							}}
						>
							<Text
								fontSize="sm"
								fontWeight="medium"
								color="primary.font"
							>
								Đăng Nhập
							</Text>
						</Link>
					</Stack>
				</Stack>
				<form
					style={{
						width: "100%",
					}}
					onSubmit={handleSubmit(onSubmit)}
				>
					<Flex
						direction="column"
						gap="4"
					>

						<FormControl isInvalid={errors.email as any}>
							<Input
								id="email"
								type="email"
								placeholder="Email của bạn"
								size="lager"
								{...register("email")}
							/>
							<FormErrorMessage>
								{(errors.email as any) && (errors?.email?.message as any)}
							</FormErrorMessage>
						</FormControl>

						<Button
							size="lager"
							type="submit"
							w="full"
							mt="4"
							rounded="full"
						>
							Gửi lại email cho tôi
						</Button>
					</Flex>
				</form>

			</Flex>
		</Center>
	);
};

export default ResetPasswordView;

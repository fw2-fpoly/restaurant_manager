import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Stack,
	useDisclosure,
} from "@chakra-ui/react";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
const staffSchema = Joi.object({
	staffname: Joi.string().trim().required().messages({
		"string.empty": "Tên nhân viên không được để trống",
		"any.required": "Trường tên sản phẩm là bắt buộc",
	}),
	images: Joi.required().messages({
		"any.required": "Trường Ảnh là bắt buộc",
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
});
const AddStaff = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: joiResolver(staffSchema),
	});

	const onSubmit = async (data: any) => {
		console.log(data);
	};
	return (
		<>
			<Button bg={"green.300"} onClick={onOpen}>
				Thêm mới
			</Button>

			<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Thêm mới nhân viên</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<form
							style={{
								width: "100%",
							}}
							onSubmit={handleSubmit(onSubmit)}
						>
							<Flex direction={"column"} gap={4}>
								<Flex direction="row" gap={4}>
									<FormControl flex={1} isInvalid={errors.staffname as any}>
										<FormLabel>Tên Nhân Viên</FormLabel>
										<Input
											id="staffname"
											type="firstname"
											placeholder="Tên Nhân Viên"
											size="lager"
											{...register("staffname")}
										/>
										<FormErrorMessage>
											{(errors.staffname as any) && (errors?.staffname?.message as any)}
										</FormErrorMessage>
									</FormControl>
								</Flex>
								<FormControl isInvalid={errors.email as any}>
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
								<FormControl isInvalid={errors.password as any}>
									<Input
										id="password"
										type="password"
										placeholder="Mật Khẩu"
										size="lager"
										{...register("password")}
									/>
									<FormErrorMessage>
										{(errors.password as any) && (errors?.password?.message as any)}
									</FormErrorMessage>
								</FormControl>
								<FormControl flex={1} isInvalid={errors.images as any}>
									<FormLabel>Image</FormLabel>
									<Input
										id="images"
										type="file"
										placeholder="images"
										size="lager"
										{...register("images")}
									/>
									<FormErrorMessage>
										{(errors.images as any) && (errors?.images?.message as any)}
									</FormErrorMessage>
								</FormControl>
								<FormControl>
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
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AddStaff;

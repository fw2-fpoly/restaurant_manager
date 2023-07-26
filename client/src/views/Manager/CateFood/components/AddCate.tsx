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
const cateSchema = Joi.object({
	catename: Joi.string().trim().required().messages({
		"string.empty": "Tên danh mục không được để trống",
		"any.required": "Trường tên sản phẩm là bắt buộc",
	}),
});
const Addcate = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: joiResolver(cateSchema),
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
					<ModalHeader>Thêm mới sản phẩm</ModalHeader>
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
									<FormControl flex={1} isInvalid={errors.catename as any}>
										<FormLabel>Tên danh mục</FormLabel>
										<Input
											id="catename"
											type="firstname"
											placeholder="Tên danh mục"
											size="lager"
											{...register("catename")}
										/>
										<FormErrorMessage>
											{(errors.catename as any) && (errors?.catename?.message as any)}
										</FormErrorMessage>
									</FormControl>
								</Flex>
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
export default Addcate;

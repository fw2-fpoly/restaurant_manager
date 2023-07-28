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
const productSchema = Joi.object({
	productname: Joi.string().trim().required().messages({
		"string.empty": "Tên sản phẩm không được để trống",
		"any.required": "Trường tên sản phẩm là bắt buộc",
	}),
	estime: Joi.string().trim().required().messages({
		"string.empty": "estime không được để trống",
		"any.required": "Trường estime là bắt buộc",
	}),
	price: Joi.string().trim().required().messages({
		"string.empty": "Giá không được để trống",
		"any.required": "Trường Giá là bắt buộc",
		"any.number": "Phải là số",
	}),
	images: Joi.required().messages({
		"any.required": "Trường Ảnh là bắt buộc",
	}),
});
const Editproduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: joiResolver(productSchema),
	});

	const onSubmit = async (data: any) => {
		console.log(data);
	};
	return (
		<>
			<form
				style={{
					width: "100%",
				}}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Flex direction={"column"} gap={4}>
					<Flex direction="row" gap={4}>
						<FormControl flex={1} isInvalid={errors.productname as any}>
							<FormLabel>Tên sản phẩm</FormLabel>
							<Input
								id="productname"
								type="firstname"
								placeholder="Tên sản phẩm"
								size="lager"
								{...register("productname")}
							/>
							<FormErrorMessage>
								{(errors.productname as any) && (errors?.productname?.message as any)}
							</FormErrorMessage>
						</FormControl>
						<FormControl flex={1} isInvalid={errors.price as any}>
							<FormLabel>price</FormLabel>
							<Input
								id="price"
								type="number"
								placeholder="Giá món ăn"
								size="lager"
								{...register("price")}
							/>
							<FormErrorMessage>
								{(errors.price as any) && (errors?.price?.message as any)}
							</FormErrorMessage>
						</FormControl>
					</Flex>

					<FormControl flex={1} isInvalid={errors.estime as any}>
						<FormLabel>Estime</FormLabel>
						<Input
							id="estime"
							type="number"
							placeholder="Thời gian món ăn"
							size="lager"
							{...register("estime")}
						/>
						<FormErrorMessage>
							{(errors.estime as any) && (errors?.estime?.message as any)}
						</FormErrorMessage>
					</FormControl>

					<FormControl flex={1} isInvalid={errors.images as any}>
						<FormLabel>Images</FormLabel>
						<Input
							id="images"
							type="file"
							placeholder="images"
							size="lager"
							multiple
							{...register("images")}
						/>
						<FormErrorMessage>
							{(errors.images as any) && (errors?.images?.message as any)}
						</FormErrorMessage>
					</FormControl>
					<FormControl>
						<Button
							type="submit"
							width="50"
							size="lager"
							backgroundColor="primary.background"
							color="primary.font"
						>
							Save Changes
						</Button>
					</FormControl>
				</Flex>
			</form>
		</>
	);
};
export default Editproduct;

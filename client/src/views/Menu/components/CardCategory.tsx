import { Button } from "@chakra-ui/react";
import { ICategory } from "~/interface/products";
import { PizzzaIcon } from "~/components/Icons";

type Props = {
	category: ICategory;
};

const CardCategory = ({ category }: Props) => {
	return (
		<Button
			color="text.200"
			size="medium"
			rounded="full"
			backgroundColor="white"
			leftIcon={<PizzzaIcon size={5} />}
		>
			{category?.title}
		</Button>
	);
};

export default CardCategory;

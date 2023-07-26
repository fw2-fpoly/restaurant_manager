import { Grid } from "@chakra-ui/layout";
import { ICategory, IProduct } from "~/interface/products";
import Title from "./Title";
import { Food } from "~/components/Food";

type Props = {
	categories: ICategory[];
	products: IProduct[];
	selectProduct?: (id: string) => void;
	openModal?: () => void;
};

const HomeProductList = ({ categories, products }: Props) => {
	return (
		<>
			<Title title="Nổi bật 🎉🎉🎉" />
			<Grid
				my={5}
				templateColumns={{ sm: "repeat(4, 1fr)", md: "repeat(5,1fr)" }}
				gap={6}
			>
				{products.map((product: IProduct, index: number) => (
					<Food key={index} />
				))}
			</Grid>
			<Title title="Bán chạy nhất 😱😱😱" />
			<Grid
				my={5}
				templateColumns={{ sm: "repeat(4, 1fr)", md: "repeat(5,1fr)" }}
				gap={6}
			>
				{products.map((product: IProduct, index: number) => (
					<Food key={index} />
				))}
			</Grid>
		</>
	);
};

export default HomeProductList;

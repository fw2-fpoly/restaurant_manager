import { AxiosResponse } from "axios";
import * as http from "~/utils/http";

export const getProduct = async (id: string | number): Promise<AxiosResponse> => {
	const response = await http.getTypeRequest("/products");
	return response?.data;
};

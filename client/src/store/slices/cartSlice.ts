import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "~/interface/products";



export interface CounterState {
	cart: IOrder[];
}

const initialState: CounterState = {
	cart: [],
}

const cartSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addCart: (state, action) => {
			console.log(action);

		},
		updateCart: (state, action) => {
			console.log(action);

		},
		deleteCart: (state, action) => {
			console.log(action);

		},
		deleteOneCart: (state, action) => {
			console.log(action);


		},
		deleteAllCart: (state, action) => {
			console.log(action);

		}
	},
});

export const { addCart, updateCart, deleteCart, deleteOneCart, deleteAllCart } = cartSlice.actions;
export default cartSlice.reducer;

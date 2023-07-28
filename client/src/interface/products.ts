export interface IProduct {
	_id?: string | number;
	name: string;
	image?: string;
	images?: string[];
	is_avaiable: boolean;
	estime: string;
	price: number;
	category_id?: string;
	created_at: Date;
	updated_at: Date;
}
export interface ICategory {
	_id?: string | number;
	name: string;
	title?: string;
	icon?: string;
	description: string;
	foods?: [string];
	created_at: Date;
	updated_at: Date;
}
export interface Iitem {
	_id?: string;
	price?: number;
	quantity?: number;
}
export enum Status {
	processing = "processing",
	confirmed = "confirmed",
	delivering = "delivering",
	cancelled = "cancelled",
	delivered = "delivered",
}
export interface IOrder {
	_id?: string;
	user_id: string;
	table_id?: number | string;
	promotion_id?: string;
	items: Iitem[];
	total_amount: number;
	estime_total: number;
	is_taken_away: boolean;
	status: Status.processing;
	payment_status: boolean;
	created_at: Date;
	updated_at: Date;
}

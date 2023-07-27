import { IProduct } from "./products";

export interface IBill {
    _id?: string | number,
    foods: IProduct,
    quantity?: number,
    order_id?: string | number,
    totalMoney?: number,
    description?: string
}

export enum Status {
    processing = "processing",
    confirmed = "confirmed",
    delivering = "delivering",
    cancelled = "cancelled",
    delivered = "delivered"
}
export interface IOrder {
    _id?: string,
    user_id: string,
    table_id?: number | string,
    promotion_id?: string,
    items:Pick<IBill, "_id">[];
    total_amount: number,
    estime_total: number,
    is_taken_away: boolean,
    status: Status.processing,
    payment_status: boolean,
    created_at: Date,
    updated_at: Date,
}
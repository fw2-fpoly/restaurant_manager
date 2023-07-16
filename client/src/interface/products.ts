export interface IProduct {
    id?: string | number;
    name: string,
    thumbnail?: string,
    rating: number,
    preparedIn: number,
    price: number,
    category?: string | number
}
export interface ICategory {
    id?: string | number;
    title: string,
    path: string,
    image?: string
}
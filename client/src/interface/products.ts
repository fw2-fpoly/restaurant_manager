export interface IProduct {
    _id?: string | number;
    name: string,
    image?: string,
    images?: string[],
    is_avaiable: boolean,
    estime: string | number,
    price: number,
    category_id?: string | number,
    created_at?: Date,
    updated_at?: Date,
}
export interface ICategory {
    _id?: string | number;
    name: string,
    icon?: string,
    description?: string,
    foods?: [string],
    created_at?: Date,
    updated_at?: Date,
}


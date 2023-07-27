import { ICategory, IProduct } from "~/interface/products";
import { ITable, Status } from "~/interface/table";

export const products: IProduct[] = [
    {
        _id: 1,
        price: 200,
        name: "Bún đậu mắm tôm",
        image: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        images: ["https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"],
        is_avaiable: true,
        estime: 1,
        category_id: 1,
    },
    {
        _id: 2,
        price: 200,
        name: "Bún đậu mắm tôm 1",
        image: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        images: ["https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"],
        is_avaiable: true,
        estime: 1,
        category_id: 1,
    },
    {
        _id: 3,
        price: 200,
        name: "Bún đậu mắm tôm 2",
        image: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        images: ["https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"],
        is_avaiable: true,
        estime: 1,
        category_id: 1,
    },
    {
        _id: 4,
        price: 200,
        name: "Bún đậu mắm tôm 3",
        image: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        images: ["https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"],
        is_avaiable: true,
        estime: 1,
        category_id: 1,
    },

];
export const categoryList: ICategory[] = [
    { _id: 1, name: "Danh muc 1", icon: "danhmuc1", },
    { _id: 2, name: "Danh muc 2", icon: "danhmuc1" },
    { _id: 3, name: "Danh muc 3", icon: "danhmuc1" },
];

export const table: ITable[] = [
    {
        _id: 1,
        table_number: 1,
        capacity: 2,
        status: Status.available,
        description: "day la mo ta ban 1",
        location: 1,
        order_id: []
    },
    {
        _id: 2,
        table_number: 2,
        capacity: 4,
        status: Status.available,
        description: "day la mo ta ban 2",
        location: 2,
        order_id: []
    },
    {
        _id: 3,
        table_number: 3,
        capacity: 2,
        status: Status.occupied,
        description: "day la mo ta ban 3",
        location: 1,
        order_id: []
    },
    {
        _id: 4,
        table_number: 4,
        capacity:6,
        status: Status.occupied,
        description: "day la mo ta ban 4",
        location: 1,
        order_id: []
    },
    {
        _id: 5,
        table_number:5,
        capacity: 4,
        status: Status.available,
        description: "day la mo ta ban 5",
        location: 1,
        order_id: []
    },
    {
        _id: 6,
        table_number: 6,
        capacity: 4,
        status: Status.available,
        description: "day la mo ta ban 6",
        location: 1,
        order_id: []
    }
];
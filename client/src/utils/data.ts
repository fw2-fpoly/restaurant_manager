import { ICategory, IProduct } from "~/interface/products";

export const products: IProduct[] = [
    {
        id: 1,
        price: 200,
        name: "Bún đậu mắm tôm",
        thumbnail: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        rating: 4.5,
        preparedIn: 10,
        category: 1
    },
    {
        id: 2,
        price: 200,
        name: "Phở bò tái nạm",
        thumbnail: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        rating: 4.5,
        preparedIn: 10,
        category: 1
    },
    {
        id: 3,
        price: 200,
        name: "Cơm rang dưa bò",
        thumbnail: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        rating: 4.5,
        preparedIn: 10,
        category: 1
    },
    {
        id: 4,
        price: 200,
        name: "Miến xào lòng mè",
        thumbnail: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        rating: 4.5,
        preparedIn: 10,
        category: 1
    },
    {
        id: 5,
        price: 200,
        name: "Bún chả phố cổ",
        thumbnail: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        rating: 4.5,
        preparedIn: 10,
        category: 2
    },
    {
        id: 6,
        price: 200,
        name: "Bữa cơm tử tù",
        thumbnail: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        rating: 4.5,
        preparedIn: 10,
        category: 3
    },
];
export const categoryList: ICategory[] = [
    { id: 1, title: "Danh muc 1", path: "danhmuc1", },
    { id: 2, title: "Danh muc 2", path: "danhmuc1" },
    { id: 3, title: "Danh muc 3", path: "danhmuc1" },
];

export interface IProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    rating: number;
    price: number;
    description: string;
}


export const productsData: IProduct[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        image: "Products-img/Book-01.png",
        rating: 3,
        price: 59.99,
        description: "Comfortable over-ear headphones with noise cancellation."
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        image: "Products-img/Book-02.png",
        rating: 5,
        price: 120.00,
        description: "Track fitness, heart rate, and receive notifications."
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Fashion",
        image: "Products-img/Book-03.png",
        rating: 1,
        price: 75.49,
        description: "Lightweight and durable running shoes for all terrains."
    },
    {
        id: 4,
        name: "Backpack",
        category: "Accessories",
        image: "Products-img/Book-04.png",
        rating: 2,
        price: 45.00,
        description: "Spacious backpack with multiple compartments."
    },
    {
        id: 5,
        name: "Gaming Keyboard",
        category: "Electronics",
        image: "Products-img/Book-05.png",
        rating: 3,
        price: 89.99,
        description: "Mechanical keyboard with RGB backlighting."
    },
    {
        id: 6,
        name: "Coffee Maker",
        category: "Home Appliances",
        image: "Products-img/Book-06.png",
        rating: 4,
        price: 39.95,
        description: "Brew fresh coffee quickly with this compact machine."
    },
    {
        id: 7,
        name: "Desk Lamp",
        category: "Home Decor",
        image: "Products-img/Book-07.png",
        rating: 4,
        price: 25.99,
        description: "Adjustable LED lamp with touch controls."
    },
    {
        id: 8,
        name: "Yoga Mat",
        category: "Fitness",
        image: "Products-img/Book-08.png",
        rating: 4,
        price: 20.50,
        description: "Non-slip mat for yoga, pilates, and stretching."
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        category: "Electronics",
        image: "Products-img/Book-09.png",
        rating: 4,
        price: 49.99,
        description: "Portable speaker with deep bass and long battery life."
    },
    {
        id: 10,
        name: "Sunglasses",
        category: "Fashion",
        image: "Products-img/Book-10.png",
        rating: 4,
        price: 15.75,
        description: "Stylish UV-protected sunglasses for outdoor use."
    }
];

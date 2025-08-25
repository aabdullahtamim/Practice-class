import FoodCartItem from "./Features/FoodCart/foodCartItem";
import Footer from "./Section/Footer";
import Header from "./Section/Header";

const foodCartData: object[] = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Burger", price: 8 },
  { id: 3, name: "Pasta", price: 12 },
];


const name: string = "Abdullah Tamim";

const app = () => {
  return (
    <>
      <Header />

      {name}
      {foodCartData.map(() => <FoodCartItem />)}


      <Footer />
    </>
  )
}

export default app;
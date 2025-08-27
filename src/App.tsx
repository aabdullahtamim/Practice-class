import FoodCartItem from "./Features/FoodCart/foodCartItem";
import FoodCartSection from "./Features/FoodCart/foodCartSection";
import Footer from "./Section/Footer";
import Header from "./Section/Header";


const app = () => {

  const Title = "Heade";

  const text = "this is text";

  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  let renderItems = people.map(item => <li>{item}</li>)

  return (
    <>
      {Title == "Header" ? <Header /> : <Footer />}

      <FoodCartSection title="this is food cart section from app component">
        <FoodCartItem />

        <ul>
          {renderItems}
        </ul>



      </FoodCartSection>
    </>
  );

}

export default app;
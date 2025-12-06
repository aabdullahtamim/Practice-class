let mainMenuListItems = [
    {
        id: 1,
        svg: `<svg width="22" height="19" viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.41665 7.80357V11.1964C6.41665 11.7586 5.95495 12.2143 5.3854 12.2143H1.03125C0.461699 12.2143 0 11.7586 0 11.1964V7.80357C0 7.24142 0.461699 6.78571 1.03125 6.78571H5.3854C5.95495 6.78571 6.41665 7.24142 6.41665 7.80357ZM0 14.5893V17.9821C0 18.5443 0.461699 19 1.03125 19H5.3854C5.95495 19 6.41665 18.5443 6.41665 17.9821V14.5893C6.41665 14.0271 5.95495 13.5714 5.3854 13.5714H1.03125C0.461699 13.5714 0 14.0271 0 14.5893ZM5.3854 0H1.03125C0.461699 0 0 0.455703 0 1.01786V4.41071C0 4.97287 0.461699 5.42857 1.03125 5.42857H5.3854C5.95495 5.42857 6.41665 4.97287 6.41665 4.41071V1.01786C6.41665 0.455703 5.95495 0 5.3854 0ZM8.8229 19H20.9688C21.5383 19 22 18.5443 22 17.9821V14.5893C22 14.0271 21.5383 13.5714 20.9688 13.5714H8.8229C8.25335 13.5714 7.79165 14.0271 7.79165 14.5893V17.9821C7.79165 18.5443 8.25335 19 8.8229 19ZM7.79165 1.01786V4.41071C7.79165 4.97287 8.25335 5.42857 8.8229 5.42857H20.9688C21.5383 5.42857 22 4.97287 22 4.41071V1.01786C22 0.455703 21.5383 0 20.9688 0H8.8229C8.25335 0 7.79165 0.455703 7.79165 1.01786ZM8.8229 12.2143H20.9688C21.5383 12.2143 22 11.7586 22 11.1964V7.80357C22 7.24142 21.5383 6.78571 20.9688 6.78571H8.8229C8.25335 6.78571 7.79165 7.24142 7.79165 7.80357V11.1964C7.79165 11.7586 8.25335 12.2143 8.8229 12.2143Z" />
            </svg>`,
        title: "Food Carts", 
    }, 
    {
        id: 2,
        svg: `<svg width="25" height="22" viewBox="0 0 25 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5738 1.49576C19.8981 -0.784512 15.9186 -0.374356 13.4625 2.15982L12.5006 3.15104L11.5387 2.15982C9.08751 -0.374356 5.10314 -0.784512 2.42736 1.49576C-0.639049 4.11295 -0.800182 8.81022 1.94396 11.6471L11.3922 21.403C12.0026 22.0329 12.9938 22.0329 13.6041 21.403L23.0524 11.6471C25.8014 8.81022 25.6402 4.11295 22.5738 1.49576Z"/>
            </svg>`,
        title: "Favorites"
    },
    
];

let foodCategoryItems =[
    {
       id: 1,
       img:'burger.png',
       title: "Burger",
    },
    {
       id: 2,
       img:'pizza.png',
       title: "Pizza",
    },
    {
       id: 3,
       img:'cold-drink.png',
       title: "Cold Drink",
    },
    {
       id: 4,
       img:'juice.png',
       title: "juice",
    },
    {
       id: 5,
       img:'tea.png',
       title: "Tea",
    }
];

let foodListItems = [
  {
    "id": 1,
    "category": 1,
    "name": "Classic Beef Burger",
    "price": 250.0,
    "currency": "BDT",
    "rating": 4.8,
    "delivery_time": "25 - 30 mins",
    "image_url": "Burger01.jpeg",
    "is_favorite": true,
    "available": true,
    "description": "A juicy beef patty served with lettuce, tomato, cheese, and special sauces inside a fresh bun. This classic burger offers a perfect mix of flavors and textures, satisfying every bite and making it one of the most loved fast-food choices worldwide."
  },
  {
    "id": 2,
    "category": 1,
    "name": "Chicken Burger",
    "price": 220.0,
    "currency": "BDT",
    "rating": 4.6,
    "delivery_time": "20 - 25 mins",
    "image_url": "Burger02.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A crispy chicken fillet paired with lettuce, cheese, and mayo, all stacked inside a soft bun. This burger combines crunchiness and tenderness, delivering a balanced flavor that is lighter than beef yet equally satisfying for fast-food lovers everywhere."
  },
  {
    "id": 3,
    "category": 1,
    "name": "Veggie Burger",
    "price": 180.0,
    "currency": "BDT",
    "rating": 4.4,
    "delivery_time": "15 - 20 mins",
    "image_url": "Burger03.jpg",
    "is_favorite": false,
    "available": true,
    "description": "Made with fresh vegetables, herbs, and spices, this veggie burger provides a wholesome and flavorful alternative to meat. Served in a soft bun with toppings and sauces, it delivers a healthy yet satisfying experience perfect for vegetarian food lovers."
  },
  {
    "id": 4,
    "category": 1,
    "name": "Double Cheese Burger",
    "price": 300.0,
    "currency": "BDT",
    "rating": 4.9,
    "delivery_time": "30 - 35 mins",
    "image_url": "Burger04.jpg",
    "is_favorite": true,
    "available": true,
    "description": "Featuring two juicy beef patties and extra melted cheese, this burger is packed with indulgence. Topped with lettuce, tomato, and sauces, it creates a rich and hearty experience, making it a dream choice for meat and cheese enthusiasts alike."
  },
  {
    "id": 5,
    "category": 1,
    "name": "Spicy Grill Burger",
    "price": 270.0,
    "currency": "BDT",
    "rating": 4.7,
    "delivery_time": "20 - 30 mins",
    "image_url": "Burger05.jpg",
    "is_favorite": false,
    "available": true,
    "description": "Grilled to perfection with bold spices, this burger offers a smoky and fiery flavor in every bite. Combined with crunchy vegetables and sauces inside a bun, it is perfect for those who crave a hot and zesty twist in their burger experience."
  },
  {
    "id": 6,
    "category": 2,
    "name": "Margherita Pizza",
    "price": 350.0,
    "currency": "BDT",
    "rating": 4.7,
    "delivery_time": "30 - 35 mins",
    "image_url": "Pizza01.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A timeless Italian classic topped with tomato sauce, fresh mozzarella cheese, and basil. The Margherita pizza delivers a simple yet rich flavor, offering a light and fresh taste that perfectly balances softness, crispness, and cheesiness in every slice."
  },
  {
    "id": 7,
    "category": 2,
    "name": "Pepperoni Pizza",
    "price": 400.0,
    "currency": "BDT",
    "rating": 4.8,
    "delivery_time": "30 - 40 mins",
    "image_url": "Pizza02.jpg",
    "is_favorite": true,
    "available": true,
    "description": "This pizza is generously topped with spicy, smoky pepperoni slices layered over gooey mozzarella and tomato sauce. Its savory and slightly spicy flavor makes it one of the most popular choices for pizza lovers seeking bold and hearty flavors."
  },
  {
    "id": 8,
    "category": 2,
    "name": "BBQ Chicken Pizza",
    "price": 420.0,
    "currency": "BDT",
    "rating": 4.6,
    "delivery_time": "25 - 35 mins",
    "image_url": "Pizza03.jpg",
    "is_favorite": true,
    "available": true,
    "description": "Loaded with tender chicken pieces marinated in smoky barbecue sauce, this pizza delivers a sweet, tangy, and savory flavor. Combined with cheese and fresh toppings, it creates a mouthwatering fusion that appeals to fans of bold, grilled flavors."
  },
  {
    "id": 9,
    "category": 2,
    "name": "Veggie Pizza",
    "price": 300.0,
    "currency": "BDT",
    "rating": 4.5,
    "delivery_time": "25 - 30 mins",
    "image_url": "Pizza04.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A healthy and colorful option topped with fresh vegetables like bell peppers, onions, mushrooms, and tomatoes. This pizza is perfect for vegetarians, offering a fresh, flavorful, and balanced taste that makes each slice light yet incredibly satisfying."
  },
  {
    "id": 10,
    "category": 2,
    "name": "Hawaiian Pizza",
    "price": 380.0,
    "currency": "BDT",
    "rating": 4.4,
    "delivery_time": "30 - 40 mins",
    "image_url": "Pizza05.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A unique combination of sweet pineapple chunks and savory ham layered over cheese and tomato sauce. Hawaiian pizza delivers a balance of sweetness and saltiness, creating a tropical flavor profile that has become a favorite for adventurous eaters worldwide."
  },
  {
    "id": 11,
    "category": 3,
    "name": "Mojo",
    "price": 40.0,
    "currency": "BDT",
    "rating": 4.6,
    "delivery_time": "10 - 15 mins",
    "image_url": "ColdDrink01.jpg",
    "is_favorite": true,
    "available": true,
    "description": "A refreshing carbonated soft drink with a signature sweet and fizzy flavor. Mojo is the world’s most popular beverage, perfect for pairing with meals or enjoying on its own. It delivers instant refreshment and a classic taste loved by generations."
  },
  {
    "id": 12,
    "category": 3,
    "name": "Pepsi",
    "price": 40.0,
    "currency": "BDT",
    "rating": 4.5,
    "delivery_time": "10 - 15 mins",
    "image_url": "ColdDrink02.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A bold and refreshing cola with a slightly sweeter taste compared to Coca-Cola. Pepsi has a distinct flavor that energizes and refreshes instantly, making it one of the most iconic and widely consumed soft drinks across the globe for decades."
  },
  {
    "id": 13,
    "category": 3,
    "name": "7UP",
    "price": 35.0,
    "currency": "BDT",
    "rating": 4.4,
    "delivery_time": "10 - 15 mins",
    "image_url": "ColdDrink03.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A crisp and clear lemon-lime flavored soda that refreshes with its light and citrusy taste. 7UP is caffeine-free, making it a smooth choice for all ages. It’s especially popular when served chilled, offering instant cooling refreshment on hot days."
  },
  {
    "id": 14,
    "category": 3,
    "name": "Sprite",
    "price": 35.0,
    "currency": "BDT",
    "rating": 4.3,
    "delivery_time": "10 - 15 mins",
    "image_url": "ColdDrink04.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A lemon-lime soda known for its sharp, crisp, and refreshing taste. Sprite is caffeine-free and widely loved for its ability to quench thirst quickly. Served chilled, it brings a fizzy and cooling experience perfect for hot weather or spicy meals."
  },
  {
    "id": 15,
    "category": 3,
    "name": "Mountain Dew",
    "price": 45.0,
    "currency": "BDT",
    "rating": 4.5,
    "delivery_time": "10 - 15 mins",
    "image_url": "ColdDrink05.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A citrus-flavored carbonated drink with bold and energizing taste. Mountain Dew is famous for its strong flavor and vibrant feel, often linked with adventure and excitement. It is a go-to choice for those who prefer intense, tangy, and lively refreshment."
  },
  {
    "id": 16,
    "category": 4,
    "name": "Orange Juice",
    "price": 60.0,
    "currency": "BDT",
    "rating": 4.6,
    "delivery_time": "10 - 15 mins",
    "image_url": "Juice01.jpg",
    "is_favorite": true,
    "available": true,
    "description": "Freshly squeezed oranges blended into a natural juice rich in vitamin C. Orange juice is sweet, tangy, and refreshing, making it an excellent choice for breakfast or a quick energy boost. It is a healthy, natural beverage enjoyed by people worldwide."
  },
  {
    "id": 17,
    "category": 4,
    "name": "Apple Juice",
    "price": 70.0,
    "currency": "BDT",
    "rating": 4.5,
    "delivery_time": "10 - 15 mins",
    "image_url": "Juice02.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A naturally sweet beverage made from fresh apples. Apple juice is refreshing, light, and loved by both kids and adults. It contains natural vitamins and minerals, making it a healthy alternative to sugary drinks and a great addition to any meal."
  },
  {
    "id": 18,
    "category": 4,
    "name": "Mango Juice",
    "price": 75.0,
    "currency": "BDT",
    "rating": 4.7,
    "delivery_time": "10 - 15 mins",
    "image_url": "Juice03.jpg",
    "is_favorite": true,
    "available": true,
    "description": "Made from ripe, juicy mangoes, this drink is a tropical delight. Mango juice is sweet, thick, and packed with vitamins, offering a refreshing experience. Loved for its natural richness, it provides a burst of fruity flavor in every sip, especially in summer."
  },
  {
    "id": 19,
    "category": 4,
    "name": "Pineapple Juice",
    "price": 65.0,
    "currency": "BDT",
    "rating": 4.4,
    "delivery_time": "10 - 15 mins",
    "image_url": "Juice04.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A tropical drink with sweet and tangy flavors made from fresh pineapple. Pineapple juice is refreshing, full of vitamins, and helps cool the body. Its natural balance of sweetness and acidity makes it a delicious and healthy choice for juice lovers."
  },
  {
    "id": 20,
    "category": 4,
    "name": "Mixed Fruit Juice",
    "price": 80.0,
    "currency": "BDT",
    "rating": 4.8,
    "delivery_time": "10 - 15 mins",
    "image_url": "Juice05.jpg",
    "is_favorite": true,
    "available": true,
    "description": "A refreshing beverage made from a blend of various fresh fruits. Mixed fruit juice combines the goodness of multiple flavors, delivering both nutrition and great taste. It is sweet, tangy, and perfect for those who love diverse fruity experiences in one glass."
  },
  {
    "id": 21,
    "category": 5,
    "name": "Milk Tea",
    "price": 30.0,
    "currency": "BDT",
    "rating": 4.5,
    "delivery_time": "5 - 10 mins",
    "image_url": "Tea01.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A warm and soothing beverage prepared with black tea and milk, sweetened for a creamy flavor. Milk tea is comforting, energizing, and widely popular in many cultures. It can be enjoyed at breakfast or anytime as a delightful and refreshing drink."
  },
  {
    "id": 22,
    "category": 5,
    "name": "Black Tea",
    "price": 25.0,
    "currency": "BDT",
    "rating": 4.3,
    "delivery_time": "5 - 10 mins",
    "image_url": "Tea02.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A strong, flavorful tea brewed from dried tea leaves without milk. Black tea is energizing and rich in antioxidants, offering a refreshing taste. It is often enjoyed plain or with sugar and lemon, making it a versatile choice for tea lovers everywhere."
  },
  {
    "id": 23,
    "category": 5,
    "name": "Green Tea",
    "price": 35.0,
    "currency": "BDT",
    "rating": 4.6,
    "delivery_time": "5 - 10 mins",
    "image_url": "Tea03.jpg",
    "is_favorite": true,
    "available": true,
    "description": "A light and refreshing tea made from unoxidized leaves, offering a delicate flavor and health benefits. Green tea is packed with antioxidants, supports digestion, and boosts metabolism. It’s widely consumed for its calming taste and wellness properties across the world."
  },
  {
    "id": 24,
    "category": 5,
    "name": "Masala Tea",
    "price": 40.0,
    "currency": "BDT",
    "rating": 4.7,
    "delivery_time": "5 - 10 mins",
    "image_url": "Tea04.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A spiced Indian tea brewed with milk, sugar, and aromatic spices like cardamom, cinnamon, and ginger. Masala tea is rich, flavorful, and warming, making it a perfect comfort drink. It is loved worldwide for its strong aroma and energizing qualities."
  },
  {
    "id": 25,
    "category": 5,
    "name": "Lemon Tea",
    "price": 30.0,
    "currency": "BDT",
    "rating": 4.4,
    "delivery_time": "5 - 10 mins",
    "image_url": "Tea05.jpg",
    "is_favorite": false,
    "available": true,
    "description": "A refreshing tea made with black tea and fresh lemon juice, creating a tangy and invigorating taste. Lemon tea is light, healthy, and packed with vitamin C, making it a soothing drink that helps digestion and boosts energy while refreshing your mood."
  }
]


let orderItems = [

    {
      "id": 10,
      "category": 5,
      "name": "Lemon Tea",
      "price": 30.0,
      "currency": "BDT",
      "image_url": "Tea05.jpg",
      "is_favorite": false,
      "available": true
    }
]





export {
    mainMenuListItems,
    foodCategoryItems,
    foodListItems

}


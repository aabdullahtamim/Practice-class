import { foodListItems } from "../../../data/data";
import foodList from "../../components/fdList";
import { cartPopup } from "../../components/popUp";

let foodListHeader = `<h2 class="text-4 font-[500] py-3 mt-4">Foods & Drinks</h2>`;

let listSection = foodListItems.map(function(item){
                return foodList(item) ;
            });

let foodListParent = `<div class="grid grid-cols-4 gap-4 mb-[100px]">
             ${listSection.join("")}
          
          </div>`;

let foodListAll = foodListHeader + foodListParent;

let foodListSection = document.getElementById('foodListArea');
let popupSection = document.getElementById('popupArea');

// add popup
foodListSection.addEventListener('click',function(e){
let targetId = e.target.getAttribute('data-food_id')    
let foodItem = foodListItems.find(i => i.id == targetId );
    let check = e.target.classList.contains('foodCartItem');
    if (check == true){
        popupSection.innerHTML = cartPopup(foodItem);
    }
    
})

// remove popup
popupSection.addEventListener('click',function(e){
    let check = e.target.classList.contains('closePopup');
    if (check == true){
        popupSection.innerHTML = "";
    }
})

// add to cart
foodListSection.addEventListener('click',function(e){
    let targetBtn = e.target

    console.log(targetBtn);
    
})















export { foodListAll}
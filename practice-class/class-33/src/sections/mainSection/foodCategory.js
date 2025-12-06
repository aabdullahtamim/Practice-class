import foodCategory from "../../components/fdCategory";
import { foodCategoryItems } from "../../../data/data";


let categoryHeader = `<h2 class="text-4 font-[500] py-3">Explore Categories </h2>`;


let categorySection = foodCategoryItems.map(function(item){
                return foodCategory(item) ;
            });

let categoryParentSection = `<div class="grid grid-cols-5 gap-x-4">
        ${categorySection.join("")}
 
         </div>`;


let foodCategoryAll = categoryHeader + categoryParentSection;


export{
    foodCategoryAll
}
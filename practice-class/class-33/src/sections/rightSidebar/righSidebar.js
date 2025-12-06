import orderList from "../../components/rightSitebar";

let listSection = orderList.map(function(item){
                return foodList(item) ;
            });

let foodListParent = `<div class=" mb-1 grid grid-cols-[70%_30%] h-[70px] p-2 gap-2 items-center rounded-md border border-[#DDDDDD] bg-[url(../public/images/food-1.png)] bg-no-repeat bg-cover">
             ${listSection.join("")}
          
          </div>`;






export{
     foodListParent
}


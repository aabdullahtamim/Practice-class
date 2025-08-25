// intro("Tamim ahmad adnan",18, "Ahmad's IT");
// intro("Ahmadullah ",10, "Ahmad's kids school");



// function intro(name, age, institute ) {
//   // let name = "Abdullah Tamim";
//   // let age = 20;
//   // let institute = "Ahmad's Education";

//   // let mycart = image + " " + tittle + " " + price;
//   let my = `my name is ${name} , i am  ${age} years old , i am study at ${institute}` ;
//   // console.log(my);

//   return my;
// }

// let tamim = intro("Abdullah Tamim",20, "Ahmad's Education");
// let tammi = intro(" Tammi","babu", "soytani");

// let h1 = document.getElementById('h1');

// let ahmad = document.getElementById('h2')

// h1.innerHTML = tamim;
// ahmad.innerHTML = tammi;

// console.log(tamim);

// function student(name,age){
//   let output = `
//   <div class="bg-amber-300 p-3 mb-2 text-center">
//     <h1 class="text-3xl">${name} </h1>
//     <span>${age}</span>
//   </div>
//   `;

//   return output;
// }

// let tamim = student("tamim",19);
// let ahmad = student("ahmad",20);
// let adnan = student("adnan",13);

// // console.log(tamim);
// // console.log(ahmad);
// // console.log(adnan);

  
// let tamimDiv = document.getElementById('tamim_div');
// let AhmadDiv = document.getElementById('ahmad_div');
// let adnanDiv = document.getElementById('adnan_div');

// console.log(tamim_div,ahmad_div,adnan_div); 

// tamim_div

let myp = document.querySelector('#my-p');
myp.addEventListener("click", afterClickAction)

function afterClickAction(){
console.log('p tag e click kora hoyeche');

}



let hello = document.querySelector('#st')

hello.addEventListener("click",action );

let count = 1;

function action(){
  console.log("tor ajke khobor ase , tui eta touch korcos kn, ei: " + count ++ );
  
}


let kmn = 

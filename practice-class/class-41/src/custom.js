// let one = function(){
//     console.log('this is function one');
// }
// one();

// let two = () => {
//     console.log('this is function two');
// }
// two();

// three();

// function three() {
//     console.log('this is function three');
// }

// let four = () => {
//     return 'this is four ';
// }

// console.log(four());

// let five = () =>'this is five ';

// console.log(five());

// setTimeout(() => {}, 1000);
// setTimeout(() => {
//     console.log('this is set time out function ');    
// }, 1000);

// setInterval(() => {}, 1000);
// let time = 1;
// setInterval(() => {
//    console.log(time++);    
// },1000 );


// let output = undefined;

// let f1 = () => {
//     console.log('this is f1');
//     f2();
// };
// let f2 = () => {
//     setTimeout(() => {
//         output = [1,2,3,4];
//         console.log(output);   
//         f3();     
//     }, 2000);
// };
// let f3 = () => {
//     output.map((i) => {
//         console.log(i);  
//     })  
// };

// f1();
// f2();
// f3();     

let output = undefined;

let f1 = (callback) => {
    console.log('this is f1');
    callback()
   
};
let f2 = (callback) => {
    setTimeout(() => {
        output = [1,2,3,4];
        console.log(output);   
     callback()
    }, 2000);
};
let f3 = () => {
    output.map((i) => {
        console.log(i);  
    })  
};

// f1(() => {
//     f2(() => {
//         f3();
//     });
    
// });



let test = 300;

let p1 = () => {
    return new Promise((resolve) => {
        console.log('this is promise one');
        resolve()        
    }
)};

let p2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('promise two');
            resolve()    
        }, 1000);
    })
};

let p3 = () => {
    return new Promise((resolve) => {
        console.log('this is promise three');
        resolve()        
    }
)};


// p1()
// .then(() => {
//     return  p2()
// }).then(() => {
//     return p3()
// })

// p1()
// .then(() => p2())
// .then(() => p3())

let ff1 = async () => {
    console.log('this is ff1');
    
};
let ff2 = async () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log('this is ff2');
            reject()
            
        }, 2000);
    })
};

let ff3 = async () => {
    console.log('this is ff3');
    
};



// let equal = async () => {
//     await ff1();
//     await ff2();
//     await ff3();
// }

let equal = async () => {
    try {
        await ff1();
        await ff2();
        await ff3();
        
    } catch (error) {
        console.log(error);
        
    }
}


// equal();

let blogpost = fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => console.log(data))



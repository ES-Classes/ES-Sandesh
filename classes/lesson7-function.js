function printHello(name) {
    console.log(`Hello! ${name}`);
}
printHello('Sandesh');

function formatName(firstname, lastname) {
    return `${lastname},${firstname}`;
}

// let fullname = formatName('Sandesh','Shrestha');
// console.log(fullname);

let printHello = function (name) {
    console.log(`Hello! ${name}`);
}

//Arrow functions
let x = (name) => `Hello! ${name}`;
let formatName = (firstname, lastname) => `Hello! ${lastname},${firstname}`;
printHello('Sandesh');
let fullname = formatName('Sandesh', 'Shrestha');
console.log(fullname);


// function Factorial(n)
// {
//     let fact = 1;
//     for(let i=0;i<n;i++)
//     {
//         fact = fact *i;
//     }
// }
// Factorial(10)


function factorial(n) {
    if (n < 2)
        return 1;
    return n * factorial(n - 1);
}
let fac = factorial(5);
console.log(fac);


let fact = (n) => n < 2 ? 1 : n * fact(n - 1);
console.log(fact(5));
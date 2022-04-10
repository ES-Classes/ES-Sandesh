let x = 90;
let y = 90;
let x1 = x++;
let y1 = ++y;
console.log(x,y,x1,y1);

//unary operator ++,--,!

let z = !x;
console.log(z);

let n = 5;
if(n%2==0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}


//find if nujber is even or odd
let iseven = x % 2 == 0;//
isEven = x &1 ==0;

// checking even or not using bitwise
//x = 7
//111 & 001 = 001 =1(odd) = 0(even)

// shifting
let p = x<<1;

let r = ~isEven;

//Comparision
//?s the difference betn == and ===
let s = x ==='90';
let ss = x !=='90';
s = x <='90';
console.log(s);

//logical
let t = s && ss;
t = false && anything;//short circuit operation
t = s||ss;


const u = x ?? "sandesh"//?? is nullish(null or undefined) coalescing operator

//ternary
let v = x == 90?45:89;

let w = x++ + 45 >> 2 <= 34 ^ 4 & 9;




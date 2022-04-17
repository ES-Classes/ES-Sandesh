let x = 50;
//var = functional scope
if (x<50)
{//code block
    let y = 89;//let = block scope
    console.log();
}
else if(x<70)
{
}
else
{

}

//chaining and nesting
// console.log(y);


//switch
let currentTime = new Date();
console.log(currentTime);
let day = currentTime.getDay();
console.log(day);

switch(day)
{
    case 0: console.log("Its sunday");
    break;
    case 1: console.log("Its monday");
    break;
    case 2: console.log("Its tuesday");
    break;
    case 3: console.log("Its wednesday");
    break;
    case 4: console.log("Its thrusday");
    break;
    case 5: console.log("Its friday");
    break;
    case 6: console.log("Its saturday");
    break;
    default:
    break;
}





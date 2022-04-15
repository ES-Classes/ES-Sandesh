

// if(averageA && averageB >= 50)
// {
//     if(averageA>averageB)
//     {
//         console.log("A wins first round");
//     }
//     else
//     {
//         console.log("B wins first round");
//     }
// }
// else{
//     ""
// }
//first round
let NepalA1 = [46, 58, 39];
let NepalB1 = [48, 41, 60];
let averageA1 = (NepalA1[0] + NepalA1[1] + NepalA1[2]) / 3;
let averageB1 = (NepalB1[0] + NepalB1[1] + NepalB1[2]) / 3;
console.log(averageA1);
console.log(averageB1);

if (averageA1 > averageB1) {
    if (averageA1 >= 50) {
        console.log("A wins second round");
    }
    else
        console.log("out of the game");
}
else {
    if (averageB1 >= 50) {
        console.log("B wins second round");
    }
    else
        console.log("Out of the game")
}

//second round
let NepalA2=[47,62,51];
let NepalB2 = [59,45,73];
let averageA2 = (NepalA2[0] + NepalA2[1] + NepalA2[2]) / 3;
let averageB2 = (NepalB2[0] + NepalB2[1] + NepalB2[2]) / 3;
console.log(averageA2);
console.log(averageB2);

if (averageA2 > averageB2) {
    if (averageA2 >= 50) {
        console.log("A wins third round");
    }
    else
        console.log("out of the game");
}
else {
    if (averageB2 >= 50) {
        console.log("B wins third round");
    }
    else
        console.log("Out of the game")
}


// third round
let NepalA3 = [47, 62, 51];
let NepalB3 = [59, 45, 73];
let averageA3 = (NepalA3[0] + NepalA3[1] + NepalA3[2]) / 3;
let averageB3 = (NepalB3[0] + NepalB3[1] + NepalB3[2]) / 3;
console.log(averageA3);
console.log(averageB3);
if (averageA3 > averageB3) {
    if (averageA3 >= 50) {
        console.log("A wins first round");
    }
    else
        console.log("out of the game");
}
else {
    if (averageB3 >= 50) {
        console.log("B wins first round");
    }
    else
        console.log("Out of the game")
}

const averageA = averageA1 + averageA2 + averageA3;
const averageB = averageA1 + averageA2 + averageA3;

if(averageA>averageB)
{
    console.log("NepalA wins the basketball match");
}
else
console.log("NepalB wins the basketball match");
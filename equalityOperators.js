// '===' is strict equality operator because it doesn't perform type coercion. '==' is loose equality operator because it will perform type coercion.
/* 

const favourite = Number(prompt("What's your favourite number? "));

console.log(favourite);

if (favourite === 23) {
 console.log('Cool, 23 is a great number')
} else if(favourite === 7) {
  console.log('Seven is also a great number')
} else {
  console.log("Number is not 23 or 7")
}


// if(favourite !== 23) console.log("Why not 23?");

// ---------------------------------------------------------------------------*/


// // Basic Boolean Logic: The AND, OR and NOT OPERATORS


// // const hasDriversLicence = true;
// // const hasGoodVision = true;

// // console.log(hasDriversLicence && hasGoodVision);
// // console.log(hasDriversLicence || hasGoodVision);
// // console.log(!hasDriversLicence);

// // const shouldDrive = hasDriversLicence && hasGoodVision;

// // if(shouldDrive) {
// //     console.log("Driving is recommended")
// // } else {
// //     console.log("Driving is not recommended");
// // }

// // const isTired = false;
// // console.log(hasDriversLicence || hasGoodVision || isTired);

// // if (hasDriversLicence && hasGoodVision && !isTired) {
// //     console.log("It is okay to drive")
// // } else {
// //     console.log("Someone else should drive")
// // }

// const dolphinsAvg1 = (96 + 108 + 89) / 3;
// const dolphinAvg2 = (97 + 112 + 101) / 3;
// const dolphinAvg3 = (97 + 1 + 101) / 3;
// const dolphinTotal = dolphinsAvg1 + dolphinAvg2 + dolphinAvg3;

// const dolphinsAvgScore = (dolphinTotal) / 3;
// console.log(dolphinsAvgScore);

// const koalaAvg1 = (88 + 91 + 110) / 3;
// const koalaAvg2 = (109 + 95 + 123) / 3;
// const koalaAvg3 = (1 + 95 + 106) / 3;
// const koalaTotal = koalaAvg1 + koalaAvg2 + koalaAvg3; 
// const koalasAvgScore = (koalaTotal) / 3;
// console.log(koalasAvgScore);



// if (koalasAvgScore === dolphinsAvgScore && koalaTotal >=100){
//     console.log("The teams tied")
// } else if (dolphinsAvgScore === koalasAvgScore && dolphinTotal >=100){
//     console.log('The teams tied')
// } else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100){
//     console.log("Koalas Win!")
// } else if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >=100) {
//     console.log('Dolphins Win!')
// } else {
//     console.log('Nobody got enough points to win');
// }

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Robert Melmeth"));



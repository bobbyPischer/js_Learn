/*
function logger() {
    console.log('my name is robert');
}

// Calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);




// Function Declaration
function calcAge1(birthyear) {
    return 2021 - birthyear;
}

const age1 = calcAge1(1990);
console.log(age1);

// Function Expression
const calcAge2 = function (birthyear) {
    return 2021 - birthyear;
}
const age2 = calcAge2(1990);
console.log(age1, age2);

// Arrow Function 'expression'

const calcAge3 = birthYear => 2021 - birthYear;
calcage3 = calcAge3(1990);
console.log(calcage3);

// Arrow Function with 2 parameters
const yearUntilRetirement = (birthYear, firstName) => {
    
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //  return retirement;
    return `${firstName} has ${retirement} years to go before retirement`;
}
console.log(yearUntilRetirement(1990, 'robert'));


// Functions calling other functions

function  cutFruitPieces(fruit) {
    return fruit * 4;

}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} has ${retirement} years to go before retirement`)
        return retirement;
    }   else {
        console.log(`${firstName} has already retired`)
        return -1;
    }

    return retirement;

}
console.log(yearUntilRetirement(1991, 'Robert'));
console.log(yearUntilRetirement(1950, "mike"));


//CODING CHALLENGE #1




// Arrow Function with 2 parameters
const yearUntilRetirement = (birthYear, firstName) => {
    
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //  return retirement;
    return `${firstName} has ${retirement} years to go before retirement`;
}
console.log(yearUntilRetirement(1990, 'robert'));
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
 
// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(dolphAvg, koalaAvg) {
    if (scoreDolphins >= scoreKoalas * 2) {
        console.log(`Dolphins win with a score of ${dolphAvg}`)
    } else if (scoreKoalas >= scoreDolphins * 2) {
        console.log(`Koalas win with a score of ${koalaAvg}`)}
        else {
        console.log(`Neither team wins`)
    }

    }
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));
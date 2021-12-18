



let country = "Australia";
let continent = "Australia";
let population = 2500000;

let isIsland = true;
let language = 

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof continent);
console.log(language);


let age = 30;
age = 31;

const birthYear = 1991;

console.log(birthYear);



// Math Operators

const currentYear = 2021;
const ageBobby = currentYear - 1990;
const ageEmily = currentYear - 1992;


console.log(ageBobby, ageEmily);

console.log(ageBobby * 2, ageBobby / 10, 2 ** 3);

const firstName = 'Robert';
const lastName = 'Melmeth';

console.log(firstName + ' ' + lastName);


//Assignment Operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4;  //x = x * 4 = 100
x ++; // x = x + 1
console.log(x);

// Comparison operators

console.log(ageBobby > ageEmily); // >, <, >=, <=
console.log(ageEmily >= 18);

const isFullAge = ageEmily >= 18;




const country = "Australia";
const continent = "Australia";
let population = 25000000;


const isIsland = true;
let language = 'english';
let description = "Australia is in " + continent + " and it's " + population + " people speak " + language;
console.log(population / 2);
population ++
console.log(population);
console.log(population > 33000000);
console.log(description);


const currentYear = 2021;
const ageBobby = currentYear - 1990;
const ageEmily = currentYear - 1992;

const averageAge = (ageBobby + ageEmily) / 2 
console.log(averageAge);


const markHeight = 1.69
const markWeight = 78

const johnHeight = 1.95
const johnWeight = 92

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
..................................................
const markHeight = 1.69
const markWeight = 78

const johnHeight = 1.08
const johnWeight = 92

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {

console.log(`Mark's BMI ${markBMI} is higher then Johns ${johnBMI}`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}

const firstName = "Bobby";
const job = "Code monkey";
const birthYear = 1990;
const year = 2021;

const bobbyNew = `I'm ${firstName} a ${year - birthYear} year old ${job} `
console.log(bobbyNew)





const age = 10;
const isOldEnough = age >= 18;

if(age >= 18) {
    console.log("Sarah can start driving licence ");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);

}

const birthYear = 2001;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const markHeight = 1.78
const markWeight = 95

const johnHeight = 1.92
const johnWeight = 92

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {

    console.log(`Mark's BMI (${markBMI}) is higher than Johns (${johnBMI})`);
}   else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)}
    



    const country = "Australia";
    const continent = "Australia";
    let population = 25000000;
    const averagePopulation = 33000000
    
    const isIsland = true;
    let language = 'english';
    let description = "Australia is in " + continent + " and it's " + population + " people speak " + language;
    console.log(population / 2);
    console.log(population);
    console.log(population > 33000000);
    console.log(description);
    
    if (population > 33000000) {
        console.log(`${country}'s population is ${population - averagePopulation} above average`);
    } else if (population === averagePopulation){
        console.log(`${country}'s population is exactly the average`)
    } 
    else { console.log(`${country}'s population is ${averagePopulation - population} below average`);

    }

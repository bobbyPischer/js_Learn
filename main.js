const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}

];



const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // for (let i = 0; i < companies.length; i++) {
// //     console.log(companies[i]);
// }



// forEach
// companies.forEach(function(company) {
//     console.log(company.);
// });


//---------------------------------------------------------------------------------


// filter
// Get 21 and older

//OLD WAY (ES 5)

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

//BETTER WAY (ES 6)
// const canDrink = ages.filter(age => age >= 21);



// Filter retail companies

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// // Get 80s companies

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);

// console.log(eightiesCompanies);

//  // Companies that lasted longer than 10 years

//  const lastedTen = companies.filter(company => (company.end >= company.start + 10));

//  console.log(lastedTen);

//-------------------------------------------------------------------------------------------------------------


// map
// // Create array of company names

//OLD WAY (ES 5)

// const companyNames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companyNames)

//BETTER WAY (ES 6)

// const testMap = companies.map(company => `${company.name} [${company.start}] [${company.end}]`);
// console.log(testMap)

// USING MULTIPLE MAPS TO MANIPULATE DATA MANY TIMES

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

// console.log(ageMap);

//---------------------------------------------------------------------------------

// sort

// sort companies by start year

// OLD WAY (ES 5)

// const sortCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortCompanies);

// BETTER WAY (ES 6) with TERNARY operator instead of if/else

// const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1);
//     console.log(sortedCompanies);

// Sort Ages in Ascending Order
const sortAgeAscending = ages.sort((a, b) => a - b);

//Sort Ages in Descending Order
const sortAgeDescending = ages.sort((a, b) => b - a);



// reduce

//Get Sum of entire Array

//With a For Loop 

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// Using REDUCE (Long Way)

// const ageSum2 = ages.reduce(function(total, age) {
//     return total + age;
// },0);

// console.log(ageSum2);

// BEST WAY

// const ageSum2 = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum2);


// //Total Years For All Companies

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0); 

// // Same using arrow functions

// const totalYears2 = companies.reduce((total, company) => total + company.end - company.start, 0);


// console.log(totalYears2);


// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);
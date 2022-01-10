const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];




//***FILTER */

//1. Get characters with a mass greater than 100
const massOver100 = characters.filter((char) => char.mass > 100)
console.log(massOver100)
//2. Get characters with a height greater than 200
const heightOver200 = characters.filter((char) => char.height > 200)
console.log(heightOver200)
// //3. Get all male characters
const allMaleChars = characters.filter((char) => char.gender === 'male')
console.log(allMaleChars)
// //4. Get all female characters
const allFemaleChars = characters.filter((char) => char.gender === 'female')
console.log(allFemaleChars)



// //***MAP */

// //1. Get array of all names
const names = characters.map((char) => char.name)
console.log(names)

// //2. Get array of all heights
const heights = characters.map((char) => char.height)
console.log(heights)

// //3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((char) => ({
    name: char.name,
    height: char.height,
}));
console.log(nameAndHeight)

// //4. Get array of all first names
const firstNames = characters.map(char => char.name.split(" ")[0])
console.log(firstNames)



// //***REDUCE ***/

// //1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass)

// //2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
console.log(totalHeight)

//3. Get total number of characters by eye colour
const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]) {
        acc[color]++;
    }else {
        acc[color] = 1;
    }
    return acc;
}, {})
console.log(charactersByEyeColor)

// //4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalNameCharacters)



//***SOME ***/

//1. Is there at least one male character?
const oneMeleCharacter = characters.some((char) => char.gender === 'male')
console.log(oneMeleCharacter)

// //2. Is there at least one character with blue eyes?
const oneCharBlueEyes = characters.some((char) => char.eye_color === 'blue')
console.log(oneCharBlueEyes)

// //3. Is there at least one character taller than 210?
const oneCharOver200 = characters.some((char) => char.height > 210)
console.log(oneCharOver200)

// //4. Is there at least one character that has a mass less than 50?
const oneCharUnder50 = characters.some((char) => char.mass < 50)
console.log(oneCharUnder50)



// // //***SORT ***/

// //1. Sort by mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass)
console.log(sortByMass)

// //2. Sort by weight(low to high)
const byHeightLowToHigh = characters.sort((a, b) => a.mass - b.mass)
console.log(byHeightLowToHigh)

// //2.1 Sort by weight(high to low)
const ByHeightHighToLow = characters.sort((a, b) => b.height - a.height)
console.log(ByHeightHighToLow)

// //3 Sort by name(A-Z)
const byName = characters.sort((a,b) => {
    if(a.name < b.name) return -1;
    return 1;
})
console.log(byName)

// //3.1 Sort by name(Z-A)
const sortByName = characters.sort((a, b) => {
    if(a.name < b.name) return 1;
    return -1;
});
console.log(sortByName)

// //4. Sort by gender(male first)
const byGender = characters.sort((a,b) => {
    if(a.gender === 'female') return -1;
    return 1;
})
console.log(byGender)



//***EVERY ***/

//1. Does every character have blue eyes?
const allBlueEyes = characters.every((char) => char.eye_color === 'blue')
console.log(allBlueEyes)
//2. Does every character weigh more than 40?
const allOver40 = characters.every((char) => char.mass > 40)
console.log(allOver40)

//3. Is every character shorter than 200?
const allShorter200 = characters.every((char) => char.height < 200)
console.log(allShorter200)

//4. Is every character male?
const everyCharMale = characters.every((char) => char.gender === 'male')
console.log(everyCharMale)
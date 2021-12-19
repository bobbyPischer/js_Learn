// SWITCH STATEMENTS

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('go to the gym');
        console.log('Read a coding book');
        break;
        case 'wednesday':
        console.log("eat a banana");
        console.log("go for a run");
        break;
    case 'thursday':
        console.log('call parents');
        console.log('sleep in');
        break;
    case 'friday':
        console.log('do more coding');
        console.log('eat a healthy dinner');
        break;
    case 'saturday':
        console.log('relax by the pool');
        console.log('go to the gym again');
        break;
    case 'sunday':
        console.log('go to a church');
        console.log('rest before work');
        break;

    default:
        console.log('Not a valid day');

    }

// Same function using if and else if statements

if (day === 'monday') {
    console.log('Plan course structure');
} else if (day === 'tuesday') {
    console.log('drink water');
} else if (day === 'wednesday') {
    console.log('eat food');
} else if (day === 'thursday') {
    console.log('go outside');
} else if (day == 'friday') {
    console.log('swim in the pool');
} else if (day === 'saturday') {
    console.log('stay inside all day');
} else if (day === 'sunday') {
    console.log('eat a banana');
} else {
    console.log('not a valid day');
}


// STATEMENTS VS EXPRESSION
// An expression is a piece of code that produces a value eg: 3 + 4, 1990, 'string', true && false && !false
// A statement is a larger piece of code that is executed and does not produce a value on it's own eg: if (23>10) {const str = '23 is bigger';}
// Statemnts are like full sentences that translate the actions we want the program to perform

//-------------------------------------------------------------------------------

// Conditional operator ( ternary operator) condition + if + else

const age = 12;
age >= 18 ? console.log("I like to drink wine 🍷") :
console.log("I like to drink water");

// storing the result in a variable
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

// Conditional operator is an expression therefore can be inserted into template literal
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water💧'}`)




// Coding Challenge 4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
bill * 0.2;
console.log(`the bill was ${bill} and the tip should be ${tip} the total value is ${bill + tip}`)


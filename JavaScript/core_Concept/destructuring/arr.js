// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// --------- EXAMPLE 1 ---------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

console.log(`${a} \n ${b}\n`);

[a, b] = [b, a];

console.log(`${a} \n ${b}\n`);

// --------- EXAMPLE 2 ---------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "blue", "green", "yellow", "white", "\n"];

[colors[3], colors[1]] = [colors[1], colors[3]];
console.log(colors);

// --------- EXAMPLE 3 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [red, blue, green, ...remaning] = colors;

console.log(` ${red}, \n ${blue}, \n ${green}, \n \n ${remaning} `);

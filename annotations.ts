// Strings
let myName: string = "Dhiman Majumdar";
myName = "Kabir Roy";
console.log(myName);

// Numbers
let favNumber: number = 7;
favNumber += 2;
console.log(favNumber);

// Boolean
let isHard: boolean = true;
console.log(isHard);


// Function Parameter Annotations

function addOne(num: number) {
    return num + 1;
}
const result = addOne(3);
console.log(result);

// Arrow Functions Annotations

const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);

// Function Return Annotations

// For Regular Function
function double1(x: number): number {
    return x * x;
}
const res1 = double1(2);
console.log(res1);

// For Arrow Function
const double2 = (x: number): number => x * x;
const res2 = double2(3);
console.log(res2);
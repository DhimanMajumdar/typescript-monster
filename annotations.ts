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
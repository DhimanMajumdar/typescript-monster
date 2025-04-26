// basic example

interface Movie {
    readonly name: string;
    ratings: number;
    genre?: string;
}

const movie1: Movie = {
    name: "StarWars",
    ratings: 8.9,
    genre: "Action",
}

console.log(movie1)
console.log(movie1.name)

// Interfaces for functions

interface MathOperation {
    (x: number, y: number): number;
}

// usage

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(3, 2));
console.log(subtract(3, 2));


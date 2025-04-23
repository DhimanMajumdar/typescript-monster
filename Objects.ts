const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
console.log(`Name:${person.firstName} ${person.lastName}, Age:${person.age}`)

// Using objects as function return value

function printUser(): { name: string; age: number; location: string } {
    return {
        name: "Alex",
        age: 19,
        location: "USA",
    };
}

const ress = printUser();
console.log(ress);
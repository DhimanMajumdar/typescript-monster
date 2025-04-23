type Person = {
    name: string;
    age: number;
};

type Employee = {
    id: number;
    title: string;
};

type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
    name: "Alice",
    age: 30,
    id: 12,
    title: "Manager",
};

console.log(`Name: ${alice.name}, Age: ${alice.age}, ID: ${alice.id}, Title: ${alice.title}`);
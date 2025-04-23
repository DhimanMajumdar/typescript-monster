type Userr = {
    name: string;
    age?: number; // optional property
    location: string;
}

const user: Userr = {
    name: "Dhiman",
    age: 30,
    location: "USA",
}

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);


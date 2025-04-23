type Userrr = {
    name: string;
    age?: number; // optional property
    readonly location: string;
}

const userr: Userrr = {
    name: "Dhiman",
    age: 30,
    location: "USA",
}

//userr.location = "something"; // Error ->.Cannot assign to 'location' because it is a read-only property.

console.log(`Name: ${userr.name}, Age: ${userr.age}, Location: ${userr.location}`);


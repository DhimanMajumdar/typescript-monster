function greet(person: string = "Dhiman") {
    return `Hello ${person}`;
}

const ans = greet(); // const ans=greet("Kabeer")
console.log(ans); // "Kabeer"
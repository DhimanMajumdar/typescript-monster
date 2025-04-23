
// type aliases
// custom type
type User = {
    name: string;
    age: number;
    location: string;
}


const printUserInfo = (user: User) => {
    return `Name:(${user.name}) Age:(${user.age}) location:(${user.location})`
}

const resss = printUserInfo({ name: "Alex", age: 30, location: "USA" })
console.log(resss);
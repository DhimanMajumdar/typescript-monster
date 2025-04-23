let password: string | number = 20

type UserrInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetailss = {
    email: string;
    password: string;
}

let userrrr: UserrInfo | AccountDetailss = {
    email: 'some@mail.com',
    password: "somepassword123",
}

console.log(userrrr.email)

const items: (number | string)[] = [1, 2, 3, "hi", "hello"];
console.log(items);
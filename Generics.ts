function uniqueDataTypesFunction<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue];
}
const res = uniqueDataTypesFunction<number>(10, 20);
console.log(res)

const res1 = uniqueDataTypesFunction<string>("hello", "hi");
console.log(res1)



function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6]
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);



function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}
const reversedPair = reversePair("hello", 20);
console.log(reversedPair);
const strArray: Array<string> = ["test", "test", "test"];
const numArray: Array<number> = [1, 2, 3];

function arrayElementsLogger<T>(array: T[]): T[] {
    for (let element of array) {
        console.log(element)
    }
    return array
}
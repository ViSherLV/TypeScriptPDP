//boolean type

const isAnimal: boolean = true;
const isHuman: boolean = false;

//number type

const number_one: number = 1;
let number_two: number = 2;

//string type

const helloWorld: string = 'Hello World'

//Array type

const firstArrayWithNumbers: number[] = [1, 2, 3];
const secondArrayWithNumbers: Array<number> = [1, 2, 3];

const arrayWithString: string[] = ['Hello', 'World'];

const tupleArray: [number, string] = [27, 'Victor'];

const arrayWithDifferendData: any[] = [1, 2, 3, 'Victor', true];

//Void type (function back anything)

function sayHello(name: string): void {
    console.log(`Hello ${name}`)
}
sayHello('World');

//Never type

function error(errorMessage: string) {
    throw new Error(errorMessage)
}

error('TypeScript error')

//Custom types & aliases

type Header = string;
const firstHeader: Header = 'Hello World';

type Login = string | number;

const myFirstLogin: Login = 123;
const mySecondLogin: Login = "string";


interface Pet {
    readonly id: number
    name: string
    age: number
    colors: {
        eyesColor: string
        woolColor: string
    }
};

const myCat: Pet = {
    id: 1,
    name: "Kitty",
    age: 10,
    colors: {
        eyesColor: "green",
        woolColor: "black and white"
    }
};

const myDog = {} as Pet;
const myRabbit = <Pet>{};

//Interfaces inheritance

interface MyPokemon extends Pet {
    power: () => number
};

const myPikachu: MyPokemon = {
    id: 2,
    name: "Pika Pika",
    age: 2,
    colors: {
        eyesColor: "black",
        woolColor: "yellow"
    },
    power(): number {
        return this.age * 10
    }
}

//Interface with Class

interface IConsole { //Naming from I !!
    time: Date
    dateOfManufacture(date: Date): void
};

class Playstation5 implements IConsole {
    time: Date = new Date()

    dateOfManufacture(date: Date): void {
        this.time = date;
    }
}

//Interface for many keys
interface Users {
    [key: string]: string
};

const usersCollection: Users = {
    userOne: 'Max',
    userTwo: 'Alina'
}
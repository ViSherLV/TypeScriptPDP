class InfoClass {
    id: number
    constructor(id: number) {
        this.id = id
    }

    classInfo(petName: string): string {
        return `${petName}: id of this class is ${this.id}`
    }
};

class MyPet {
    readonly petName: string
    age: number = 0

    constructor(myPet: string) {
        this.petName = myPet;
    }

}

// protected, public and private Classes
class Car {
    protected maxSpeed: number = 260;
    public color: string = 'green';
    private drive() {
        console.log('Lets go')
    }
    constructor() {
        this.drive()
    }
}

class Lambo extends Car {
    public setParams(color: string, maxSpeed: number): void {
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
};

const lamborginiAventador = new Lambo()
lamborginiAventador.setParams('Red', 460)

//Abstract Classes

abstract class Fish {
    abstract speed(speed: number): void;
    abstract name(name: string): string
}

class Nemo extends Fish {
    speed(speed: number): void {
        console.log(`My speed is ${speed}`)
    }
    name(name: string): string {
        return `Fish name is ${name}`
    }
}
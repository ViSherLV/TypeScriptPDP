class Department {
    // private name: string;
    // private id :string;
    private employees: string[] = []

    constructor(private id:string, public name:string){
        // this.id = id
        // this.name = n;
    }

    describe(this: Department){
        console.log(`Department: ${this.id}:${this.name}`)
    }

    addEmployee(employee:string = "1"){
      this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }

}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee("Viktor");
accounting.addEmployee("Vito");

accounting.describe();

accounting.printEmployeeInformation();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe};

// accountingCopy.describe()
function concat(a: number, b: number): number {
    return a + b;
}

//multiple intrfaces for functions

interface FullName {
    firstName: string | undefined
    secondName: string | undefined
}

interface FirstNameOnly extends FullName {
    default: string

}

function fullNameInObj(): FullName;
function fullNameInObj(a: string): FirstNameOnly;
function fullNameInObj(a: string, b: string): FullName;

function fullNameInObj(a?: string, b?: string) {
    if (!a && !b) {
        return { firstName: undefined, secondName: undefined }
    }
    if (a && !b) {
        return { firstName: a, secondName: undefined, default: a.toString() }
    }
    return { firstName: a, secondName: b }
}


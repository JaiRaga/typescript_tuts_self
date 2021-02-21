// Primitive type
let speed: number = 5
let firstname: string = 'Raga'
let isBool: boolean = true

let isnull: null = null
let isundef: undefined = undefined
let isvoid: void

// built-in classes
let date: Date = new Date()

// Arrays
let names: string[] = ['Raga', 'Suce', 'Krishna', 'Subbu']
let numbers: number[] = [1,2,3]
let bool: boolean[] = [true, false, true]

// Object literal
let person: {name: string, age: number} = {
    name: 'yes',
    age: 99
}

// Functions
let logTitle: (title: string, duration: number) => void = (title, duration) => {
    console.log(title)
}
const array = ['C','C++','C#','JavaScript','TypeScript','Python','Java','Basic','Go','Swift']
let accumulator = []

for(let i = 0; i < array.length; i++) {
    if(array[i].length > 3) {
        accumulator.push(array[i])
    }
}
console.log(accumulator)
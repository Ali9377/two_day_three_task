const array = [-1,-2,-3,1,2,3,1,1,1,1]
let accumulator = 0

let j = 0
while(j <= array.length) {
    if(array[j] >= 0) {
        accumulator += array[j]
    }
j++
}
console.log(accumulator)
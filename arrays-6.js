const array = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i <array.length; i++) {
    if(array[i] % 2 === 0) {
        console.log(array[i])
    }
}

let j = 0;
while (j < array.length) {
  if (array[j] % 2 !== 0) {
    console.log(array[j]);
  }
  j++;
}
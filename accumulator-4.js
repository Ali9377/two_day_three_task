const array = ['Абубакар','Исмаил','Джумалла','Абдуллах','Мохьмад','Хамзат','Али','Мансур','Адам','Якуб']
let accumulator = []

for(let i = 0; i < array.length; i++) {
    if(array[i][0] === 'А') {
        accumulator.push(array[i])
    }
}
console.log(accumulator)
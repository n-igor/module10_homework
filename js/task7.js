const arr = [1, 2, 3, 5, 0, null, 'hello', false, [3, 5], {'name' : 'Ivan'}];
let countEven = 0,
    countZero = 0,
    countOdd = 0;
arr.forEach((item) => {
    if (item === 0) {
        countZero += 1;
    } else if (typeof(item) === 'number' && !isNaN(item)) {
        (item % 2 === 0 && item !== 0) ? countEven += 1 : countOdd += 1;
    }    
});
console.log(`В массиве четных элементов: ${countEven}, нечетных: ${countOdd}, элементов, равных 0: ${countZero}`);
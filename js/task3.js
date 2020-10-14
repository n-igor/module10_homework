const reverseStr = (str) => {
    let res = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
        res += str[i];
    }
    return res;
}
console.log(reverseStr('Hello'));

// Задание верно, но есть более короткий вариант решения:

const reverseString = string.split("").reverse().join("");
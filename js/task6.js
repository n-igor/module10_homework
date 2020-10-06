const arr = [1, 1, 1, 1];
let isTrue = true;
for (let i = 1; i < arr.length; i += 1) {
    if (arr[0] !== arr[i]) {
        isTrue = false;
        break;
    }
};
console.log(isTrue);
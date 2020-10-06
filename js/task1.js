const value = +prompt("Введите любое число", "Например, 100");
const isNumber = (typeof(value) == 'number' && !isNaN(value));
if (isNumber) {
    (value % 2 == 0) ? console.log("Вы ввели четное число"): console.log("Вы ввели нечетное число");
} else {
    console.log('Упс, кажется, вы ошиблись');
};
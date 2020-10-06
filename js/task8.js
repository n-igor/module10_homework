const newMap = new Map([
    ["apple", "green"],
    ["pinapple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
]);
for (let fruit of newMap.keys()) {
    let val = newMap.get(fruit);
    console.log(`Ключ - ${fruit}, Значение - ${val}`);
}
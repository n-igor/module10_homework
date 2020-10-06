const typeVal = (x) => {
    switch (typeof(x)) {
        case 'number':
            console.log('Х - число');
            break;
        case 'string':
            console.log('Х - строка');
            break;
        case 'boolean':
            console.log('Х - булево');
            break;
        default:
            console.log('Тип x не определён');
    }
}
typeVal(1);
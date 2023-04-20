console.log('Задание2 :');


//только положительные числа от 0 до 1000
function isPrime(item) {
    if (item > 1000) {
        return 'данные неверны';
    }

    if (item < 2) {
        return `число ${item} не такое и простое`;
    }

    for (let i = 2; i < Math.ceil(Math.sqrt(item)); i++) {
        if (Number.isInteger(item / i)) {
            return `число ${item} не такое и простое`;
        }
    }

    return `число ${item} простое`;
}

console.log(isPrime(1));
console.log(isPrime(997));
console.log(isPrime(500));
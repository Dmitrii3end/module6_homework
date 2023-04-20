console.log('Задание3 :');

function firstNumber(a) {
    return function(b) {
        return a + b;
    }
}

const sum = firstNumber(5);

console.log(sum(-2));
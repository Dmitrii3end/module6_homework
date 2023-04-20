console.log('Задание4 :');

function printNumber(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// использование:
printNumber(5, 15);
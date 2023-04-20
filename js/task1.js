console.log('Задание1 :');

function evenOddZeroCounter() {
    const array = [1, '1', 1.1, 11, undefined, {}, 2, 22, 0, 0, -1, true];
    let countEven = countOdd = countZero = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number') {
            if (array[i]) {
                array[i] % 2 ? countOdd++ : countEven++;
            } else {
                countZero++;
            }
        }
    }

    console.log(`Количесвто четных: ${countEven} Количество нечетных: ${countOdd} Количество 0: ${countZero}`);
}



evenOddZeroCounter();
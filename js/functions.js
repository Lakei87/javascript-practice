// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
// function calculateTotal(number) {

// let result = 0;
    
// for (let i = 0; i <= number; i++) {
//     result += i;
//     }
    
//     return result;

// }

// console.log(calculateTotal(5));


// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
        
//     }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// function findLongestWord(string) {

//     let newArray = string.split(" ");
//     let wordLength = 0;
//     let longestWord = '';

//     for (let i = 0; i < newArray.length; i += 1) {

//         if (newArray[i].length > wordLength) {
//             wordLength = newArray[i].length;
//             longestWord = newArray[i];

//         }
//     }

//     return longestWord;
    
// }

// console.log(findLongestWord("Google do a roll"));


// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
    
//     for (let i = min; i <= max; i++) {
//         numbers.push(i);
        
//     }

//   return numbers;
// }

// console.log(createArrayOfNumbers(3, 25));


// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// function filterArray(numbers, value) {
//    const numbersOfNewArray = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//         numbersOfNewArray.push(numbers[i]);
//         }
//     }

//   return numbersOfNewArray;
// }
// console.log(filterArray([1, 9, 7, 1, 5], 3));


// 8*. Написать функцию которая принимает массив с цифрами, получить целое число и прибавить 1, результат вернуть в виде массива
// function plusOne(numbersArr) {
//     const numbersPlusOne = Number(numbersArr.join("")) + 1;
//     return String(numbersPlusOne).split("");
    
// }

// console.log(plusOne([1, 9, 8, 5]));



// function reverseWords(str) {
//     const strArr = str.split(" ");
//     let newStr = [];

//     for (let i = 0; i < strArr.length; i += 1) {
//         let reversWord = strArr[i].split("").reverse().join("");
//         newStr.push(reversWord);
        
//     }

//     return newStr.join(" ");

// }

// console.log(reverseWords("google is the best!"))



var number = function (busStops) {
    // Good Luck!
    let result = 0;

    for (const busStop of busStops) {
        for (let i = 0; i < busStop.length; i++) {
            if (i % 2 === 0) {
                result += busStop[i];
                // console.log(result);
            } else {
                result -= busStop[i];
            }
        }
    }

    return result;
}

    console.log(number([[10, 0], [3, 5], [5, 8]]));
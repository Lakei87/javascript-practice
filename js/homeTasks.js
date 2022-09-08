// Треугольник. Напишите цикл,  выводит такой треугольник:
function Troj(a) {
    let str = "";

    for (let i = 1; i <= a; i++) {
        str += "#"
        console.log(i, str);
    }
}

// Troj(20);


// ==========================================
// Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
function shach(a, b) {
    let arr = [];
    
    for (let j = 0; j < b; j++) {

        if (j % 2 === 0) {

            for (let i = 0; i < a; i++) {
                if (i % 2 === 0) {
                    arr.push("#");
                } else arr.push("-");
            }

        } else
            
            for (let i = 0; i < a; i++) {
                if (i % 2 === 0) {
                    arr.push("-");
                } else arr.push("#");
            }
        
        console.log(arr.join(" "));
        arr.splice(0, arr.length);

    }   

}

// shach(16, 16);


// ===============================================!!!!!!!!!!!!!!!!!!!
const totalMinutes = 1441;
let hours = Math.floor(totalMinutes / 60);
// console.log(hours);

const minutes = totalMinutes % 60;
// console.log(minutes);

// console.log(`${hours} : 0${minutes}`);


// =============================================
// FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
function fizzBuzz(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 5 === 0 && i % 3 === 1) console.log("Buzz");
        else if (i % 3 === 0) console.log("Fizz");
        else console.log(i);
    }
}

// fizzBuzz(1, 100);


// ==================================================
function remarkString(a) {
    return console.log(a.replaceAll("!", "%"));
}

// remarkString("hel!lo wor!ld!");


// ====================================================
// Example 6
//  Реализуйте функцию twoSum.
//  На вход передаем массив с числами первым аргументом и искомое число вторым.
//  Функция должна вернуть массив из 2-х индексов чисел при сложении которых сумма будет равна искомому числу (второму аргументу).
 
//  * console.log(twoSum([2, 4, 1, 5, 7], 8)); // [2, 4]
//  * console.log(twoSum([2, 4, 1, 5, 7], 3)); // [0, 2]

function twoSum(a, b) {
    if (!Array.isArray(a)) return "is not array";
    for (let i = 0; i < a.length; i += 1) {
        if (isNaN(a[i])) return "array has NaN";
    }
    if (isNaN(b)) return "is NaN"

    let result = [];

    for (let i = 0; i < a.length - 1; i++) {
        console.log(i);
        for (let j = i + 1; j < a.length; j++) {
            console.log(j);
            if (a[i] + a[j] === b) {
                result.push(i, j)
                return console.log(result);
            }
        }
    }
}

// twoSum([2, 4, 1, 5, 7], 3);


// ==============================================
//  * Example 3 - Массив объектов
//  * Напишите ф-цию calcTotalPrice(stones, stoneName),
//  * которая принимает массив обьектов и строку с названием камня.
//  * Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName = '') {
    if (Array.isArray(stones) === false) return 'Error'
    if (stoneName.length === 0) return 'Error'

    let total = 0

    for (let stone of stones) {
        if (stone.name === stoneName) {
            total = stone.price * stone.quantity
            break
        }
    }

    // console.log(total)
    return total
}

const stoneTotalPrice = calcTotalPrice(stones, 'Сапфир')
// console.log(stoneTotalPrice)


// ===================================================
/**
 * Example 4
 * Реализуйте функцию `compare(firstNumber, secondNumber, operation, result)`, которая
 * - производит операцию `operation` над числами `firstNumber` и `secondNumber`
 * полученное число сравнивает с переменной `result`
 * возвращает результат этого сравнения.
 * 
 * compare("1", "2", "+", "3"); // true
 * 
 * Ограничения на входные данные
 * `firstNumber`, `secondNumber`, `result` - могут быть как типа Number так и String. 
 * Переменные типа String при преобразовании к числовому формату всегда будут валидным числом.
 * `operation` - строка c одной из 4 математических операций: +,-,*,/
 */

function compare(firstNumber = 0, secondNumber = 0, operation = '+', result = 0) {
    const num1 = Number(firstNumber)
    const num2 = Number(secondNumber)
    const res = Number(result)

    const operationsDic = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
        '*': function(a, b) { return a * b },
        '/': function(a, b) { return a / b }
    }

    
    if ((operation in operationsDic) === false) return 'Error'
    if (isNaN(num1) || isNaN(num2) || isNaN(res)) return 'Error'

    const operationResult = operationsDic[operation](num1, num2)

    return operationResult === res
    // 4 === 4
}

const res = compare("2", "2", "*", "4")
// console.log(res)


// ==============================================
/**
 * Example 5 - Комплексные задачи
 * Напиши скрипт управления личным кабинетом интернет банка. 
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
      createTransaction(amount, type) {
          if (type === "deposit") {
              this.transactions.push(Transaction.DEPOSIT);
              this.balance += amount;
          } else if (type === "withdraw") {
              this.transactions.push(Transaction.WITHDRAW);
              this.balance -= amount;
          }
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
      deposit(amount) {
          this.createTransaction(amount, "deposit");
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     * 
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
      withdraw(amount) {
          this.createTransaction(amount, "withdraw");
    },
  
    /*
     * Метод возвращает текущий баланс
     */
      getBalance() {
          this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {},
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {},
};
  
account.createTransaction(2500, "deposit");
account.createTransaction(500, "withdraw");
// console.log(account.balance);
// console.log(account.transactions);

account.deposit(2500);
// console.log(account.balance);
// console.log(account.transactions);

account.withdraw(300);
// console.log(account.balance);
// console.log(account.transactions);

account.getBalance();
// console.log(account.balance);



// =============================================
/**
 * 2. Организовать функцию getInfo, 
 * которая принимает объект вида{ name: ..., info: { employees: [...], partners: [ … ] } }
 * и выводит в консоль имя (если имени нет, показывать ‘Unknown’) 
 * и первые две компании из массива partners:
 */
function getInfo(obj) {
    if (!obj.name) return "Object without name!!!"
    const { partners } = obj.info
    let newArr = []

    // console.log(`name: ${obj.name}`);
    for (let i = 0; i < 2; i += 1) {
        newArr.push(partners[i])
    }
    return `partners: ${newArr}`
}

const result = getInfo({
    name: "Iryna",
    info: {
        employees: ["Dima", "Taras"],
        partners: ["Coca-kola", "Nestley", "Xerox", "Nike"],
    }
});
// console.log(result);


// ============================================
/**Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.*/
function min(...arg) {
    return Math.min(...arg)
}

// console.log(min(55, 10, 52, 6, -25));


// =============================================
/**Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить? */
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else return false
}

// console.log(isEven(-2));


// ==============================================
/**Считаем бобы. Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs. */
function countBs(str, symbol) {
    const arrOfLetters = str.split("")
    // console.log(arrOfLetters)
    let totalLetter = 0

    for (const letter of arrOfLetters) {
        let letterToLowerCase = letter.toLowerCase()
        if (letterToLowerCase === "b") {
            totalLetter += 1
        }
    }
    let checkSymbol = arrOfLetters.includes(symbol);

    return [checkSymbol, totalLetter]
}

// console.log(countBs("kjBvdsBjb", "f"))


// =================================================
/**Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2]. */
function range(start, end, step = 1) {
    let numbersArr = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            numbersArr.push(i)
        }
    } else {
        for (let i = start; i >= end; i += step) {
            numbersArr.push(i)
        }
    }
    console.log(numbersArr)
    return numbersArr
}

function sum(array) {
    let result = 0

    for (const arr of array) {
        result += arr
    }

    return result
}

// console.log(sum(range(30, 25, -3)))


// =================================================
/**Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse. */
function reverseArray(array) {
    let newArr = []

    for (let i = array.length - 1; i >= 0; i -= 1) {
        newArr.push(array[i])
    }
    // array = newArr  ***для фунции в том же массиве
    return array === newArr
}
// console.log(reverseArray([25, 2, 9, 4, 5]));


// =================================================
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const newArr = []
    
  for (const bird of birds) {
      if (!geese.includes(bird)) {
        newArr.push(bird)
        }
    }
    
  return newArr
  // return an array containing all of the strings in the input array except those that match strings in geese
};

const resul = gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
// console.log(resul)


// ===================================================
function updateLight(current) {
  
  //your code here!
  const shelf = {
    green: "yellow",
    yellow: "red",
    red: "green",
    }

    const keys = Object.keys(shelf)
    console.log(keys)

    for (const key of keys) {
        if (key === current) {
            return shelf[key]
        }
    }

}

// console.log(updateLight("yellow"))


// ==============================================
var number = function(array){
  //your awesome code here
    let result = []
    
    for (let i = 1; i <= array.length; i += 1) {
        result.push(`${i}: ${array[i - 1]}`)
    }

  return result
}

// console.log(number(["a", "b", "c"]))


// =================================================
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = 0
  
  for (const sheep of arrayOfSheep) {
    if (sheep) total += 1
  }
}


// ====================================?????????????????????????
function stray(numbers) {
    let arr = new Array(...numbers)
  
  for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === arr[i + 1]) {
          arr.splice(i, 2)
          console.log(arr)
        i = 0
        // console.log(arr)
        }
    }
    
  return arr;
}

// console.log(stray([17, 17, 17, 17, 17, 17, 5, 17, 17]))


// ======================================================
function DNAtoRNA(dna) {
    let result = ""
    
    for (let i = 0; i < dna.length; i += 1) {
        if (dna[i] === "T") {
            result += "U"
        } else result += dna[i]
    }

    return result
}

// console.log(DNAtoRNA("TTT"))


// ========================================================
function greet(language) {
	const shelf = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  }
  let keys = Object.keys(shelf)
  
    for (const key of keys) {
        console.log(key)
        console.log(shelf[key])
    // return (key === language) ? shelf[key] : shelf.english
  }
}

// console.log(greet("welsh"))


// ======================================================
function howMuchILoveYou(nbPetals) {
    // your code
    const answers = {
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly",
        6: "not at all",
    }
    let num = (nbPetals % 6)

    if (num === 0) return answers[6]
    else return answers[num]

}

// console.log(howMuchILoveYou(160))


// =======================================================
function descendingOrder(n){
  //...
    const numbersArr =  new String(n).split("")
    console.log(numbersArr)

    const correctArr = numbersArr.sort((a, b) => b - a)
    console.log(correctArr)

    return Number(correctArr.join(""))
}

// console.log(descendingOrder(1234576))


// =======================================================
function minMax(arr){
    let newArr = []
    const sortArr = arr.sort((a, b) => a - b)

    newArr.push(sortArr[0])
    newArr.push(sortArr[sortArr.length - 1])
        
    return newArr
}

// console.log(minMax([1, 3, 4, 2, 5]))
// console.log(minMax([5]))


// =======================================================
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
    // console.log("prev:", previousValue)
    // console.log("num:", number)
  return previousValue + number;
});

// console.log(total); // 32


// ==================================================
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);


// =======================================================
function changeEven(numbers, value) {
  // Change code below this line
  const newArr = []

  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArr.push(number * value)
    } else newArr.push(number)
  })

  console.log(numbers === newArr);
  return newArr
  // Change code above this line
}

// console.log(changeEven([1, 2, 3, 4, 5, 6, 7], 2))


// =========================================================
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.map(player => player.playtime / player.gamesPlayed)
.reduce((total, playtime) => total += playtime)

// console.log(totalAveragePlaytimePerGame)
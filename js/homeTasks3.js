/** Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. */
class Worker {
    #name;
    #surname;
    #rate;
    #days;

    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getName() {
        return this.#name
    }

    getSurname() {
        return this.#surname
    }

    getRate() {
        return this.#rate
    }

    setRate(newRate) {
        return this.#rate = newRate
    }

    getDays() {
        return this.#days
    }

    setDays(newDays) {
        return this.#days = newDays
    }

    getSalary() {
        return this.#rate * this.#days
    }

}

const worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// console.log(worker.setRate(20));
// console.log(worker.getSalary());


// ==========================================================
/** Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки. */
class MyString {
    reverse(str) {
        return str.split("").reverse().join("")
    }

    ucFirst(str) {
        const arrOfStr = str.split("")
        arrOfStr[0] = arrOfStr[0].toUpperCase()
        return arrOfStr.join("")
    }

    ucWords(str) {
        const arrOfStr = str.split(" ")
        let result = []

        // for (let i = 0; i < arrOfStr.length; i += 1) {
        //     let arrOfChar = [...arrOfStr[i]]
        //     arrOfChar[0] = arrOfChar[0].toUpperCase()
        //     result.push(arrOfChar.join(""))
        // }

        // for (const str of arrOfStr) {
        //     let char = [...str]
        //     char[0] = char[0].toUpperCase()
        //     result.push(char.join(""))
        // }

        arrOfStr.forEach(element => {
            let char = [...element]
            char[0] = char[0].toUpperCase()
            result.push(char.join(""));
        });
            
        return result.join(" ")
    }
}

const testStr = new MyString()

// console.log(testStr.ucWords("bvjhsd ggugug fdthcjo bjhi bfdytfa"))


// =====================================================
const XO = (str) => {
    const creatArrToUpperCase = str.toUpperCase().split("")
    console.log(creatArrToUpperCase)
    let countX = creatArrToUpperCase.filter(char => char === "X")
    let countO = creatArrToUpperCase.filter(char => char === "O")
    
    return [countX.length, countO.length].every(num => num % 2 === 0)
}

// console.log(XO("xo"))


// =============================================================
const summation = num => {
    const arrOfNums = []

    for (let i = 1; i <= num; i += 1) {
        arrOfNums.push(i)
    }

    return arrOfNums.reduce((acc, num) => acc + num)
}

// console.log(summation(8))


// ===============================================================
const removeSmallest = numbers => {
    const smallestNum = Math.min(...numbers)
    const copyOfNumbers = [...numbers]

    copyOfNumbers.splice(numbers.indexOf(smallestNum), 1)

    return copyOfNumbers
}

// console.log(removeSmallest([1, 2, 3, 4, 5]))


// ======================================================
//return the total number of smiling faces in the array
const countSmileys = arr => {
    const eyesArr = [":", ";"]
    const nosesArr = ["-", "~"]
    const smilesArr = [")", "D"]
    let count = 0

    arr.forEach(element => {
        if (element.length === 2) {
            if (eyesArr.includes(element[0]) && smilesArr.includes(element[1])) {
                count += 1
            }
        }
        if (element.length === 3) {
            if (eyesArr.includes(element[0]) &&
                nosesArr.includes(element[1]) &&
                smilesArr.includes(element[2])) {
                count += 1
            }
        }
    })

    return count
}

// console.log(countSmileys([':D',':~)',';~D',':)']))


// =======================================================
const filter_list = list => {
    return list.filter(element => element !== String(element))
}

// console.log(filter_list([1,2,'a','b','125']))


// ======================================================
const nbYear = (p0, percent, aug, p) => {
    let years = 0

    for (let i = p0; i <= p;) {
        console.log(i)
        i = Math.round(i + (i * percent / 100) + aug)
        years += 1
    }

    return 
}

// console.log(nbYear(1500, 5, 100, 5000))


// =========================================================
const rentalCarCost = days => {
    const pricePerDay = 40
    let totalPrice = 0

    if (days < 3) {
        return totalPrice = pricePerDay * days;
    } else if (days < 7) {
        return totalPrice = pricePerDay * days - 20;
    } else totalPrice = pricePerDay * days - 50

    return totalPrice
}

// console.log(rentalCarCost(2))


// ========================================================
const sortArray = array => {
    let copyOfArr = [...array]
    let sortOddNum = copyOfArr.filter(num => num % 2 !==0).sort((a, b) => a - b)

    // for (let i = 0; i < copyOfArr.length; i += 1) {
    //     if (copyOfArr[i] % 2 !== 0) {
    //         let smallestOddNum = sortOddNum.splice(0, 1).join("")
    //         copyOfArr.splice(i, 1, Number(smallestOddNum))
    //     }
    // }

    copyOfArr.forEach((num, index) => {
        if (num % 2 !== 0) {
            let smallestOddNum = Number(sortOddNum.splice(0, 1).join(""))
            copyOfArr.splice(index, 1, smallestOddNum)
        }
    })

    return copyOfArr
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]))


// =========================================================
const squareSum = numbers => {
    if(numbers.length === 0) return 0
    return numbers.map(num => num * num).reduce((acc, num) => {
        return acc += num
  })
}

// console.log(squareSum([]))


// =====================================================
function basicOp(operation, value1, value2) {
    const library = {
        "+": function (value1, value2) { return value1 + value2 },
        "-": function (value1, value2) { return value1 - value2 },
        "*": function (value1, value2) { return value1 * value2 },
        "/": function (value1, value2) { return value1 / value2 },
    }

    return library[operation](value1, value2)
}

// console.log(basicOp('-', 7, 5))


// ========================================================
function findShort(s){
    const newArr = s.split(" ")
        .map(el => el.length)
        .sort((a, b) => a - b)

    return newArr[0]
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


// =========================================================
const toJadenCase = (value) => {
    const array = value.split(" ")
    return array.map(arr => arr[0].toUpperCase() + arr.slice(1)).join(" ")
    
};

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))


// =============================================================
function persistence(num) {
    if (num < 10) {
        return 0
    } else {
        const arr = String(num).split("")
        const newNum = arr.reduce((acc, element) => acc * element)
        let count = 1
        count += (persistence(newNum))
        return count
    }

}

// console.log(persistence(999))


// ==========================================================
const accum = str => {
    return str.split("")
        .map((char, index) => char.repeat(index + 1).toLowerCase())
        .map(char => char[0].toUpperCase() + char.slice(1))
        .join("-")
    // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// console.log(accum("aBcd"))


// ============================================================
const openOrSenior = data => {
    const result = []
    
    data.forEach(el => {
        if (el[0] >= 55 && el[1] > 7) {
            result.push("Senior")
        }   else {result.push("Open")}
    })

    return result
}

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))


// ==============================================================
const solution = (str, ending) => {
    return ending === str.slice(-ending.length)

}

// console.log(solution('abc', 'bc'))


// ============================================================
const solutionNew = string => {
    const alfabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
    let arrOfString = string.split("");
    let result = []
    arrOfString.forEach((char, index, arr) => {
        if (alfabet.includes(char)) {
            if (arr[index - 1] !== " ") {
                result.push(' ', char)
            } else result.push(char)
        } else result.push(char)
    })
    return result.join("")
}

// console.log(solutionNew('cajVJHJ tgchu Thbkjch'))


// ===============================================================
function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        let arrToPush = arr.slice(i, i + size);
        result.push(arrToPush);
    }
    return result;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3))


// ================================================================
function alphabetPosition(text) {
    const shelf = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    }
    let strOfNum = []
    const textArr = text.toLowerCase().split("");
    for (let i = 0; i < textArr.length; i += 1) {
        if (textArr[i] in shelf) {
            let letter = textArr[i]
            strOfNum.push(shelf[letter])
        }
    }
    return strOfNum.join(' ')
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// =================================================================
function twoSort(s) {
    const sortedArr = s.sort();
    console.log(sortedArr)
    return sortedArr[0].split("").join("***");
}

// console.log(twoSort(["BTC","Bitcoin","DarkCoin","DarkCoin","Dash","Factom","Lisk","LiteCoin","LiteCoin","Mine","Monero","ProofOfWork","Steem"]));


// ===============================================================
const gimme = triplet => {
    const copyArr = [...triplet].sort((a, b) => a - b);
    return triplet.indexOf(copyArr[1]);
}

// console.log(gimme([2, 5, 3]));


// ================================================================
const removeChar = str => {
    return str.split('').slice(1, str.length - 1).join('');
};

// console.log(removeChar("eloquent"));
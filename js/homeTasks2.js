const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

// console.table(users)

const calculateTotalBalance = users => {
    return users.reduce((total, user) => {
       return total + user.balance
    }, 0)
}

// console.log(calculateTotalBalance(users))


// =============================================
function findNextSquare(sq) {
    let checkNum = Math.sqrt(sq)

    if (Number.isInteger(checkNum)) {
        checkNum += 1
        return Math.pow(checkNum, 2)
    } else return -1;
}

// console.log(findNextSquare(121))


// =================================================
function arithmetic(a, b, operator){
  //your code here!
  const shelf = {
    add: function(a, b) { return a + b},
    subtract: function (a, b) { return a - b},
    multiply: function (a, b) { return a * b},
    divide: function (a, b) { return a / b},
  }
  
  return shelf[operator](a, b)
  
}

// console.log(arithmetic(10, 3, "subtract"))


// ============================================
// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers.length === 0) return 0
  
    return numbers.reduce((total, number, index, array) => {
       return total + number                   
    }, 0)
};

// console.log(sum([1, 5, 6]))


// ===============================================
function addBinary(a, b = 0) {
  const sumNum = a + b
  let acc = sumNum
  let result = []

  for (let i = 0; i < acc;) {
    acc = parseInt(acc / 2)
    console.log(acc)
    if (acc % 2 === 0) result.push("0")
    if (acc % 2 === 1) result.push("1")
  }

  return result.join('')
}

// console.log(addBinary(10, 0))


// =============================================
function longest(s1, s2) {
  
  const concatArr = [...s1.split(""),  ...s2.split("")]

  const result = [...concatArr]
    .sort((a, b) => a.localeCompare(b))
    .filter((element, index, array) => array.indexOf(element) === index)

  return result.join("")
}

// console.log(longest("aretheyhere", "yestheyarehere"))


// ======================================================
/** Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.*/
const sqrArr = arr => arr.map(num => Math.pow(num, 2))

// console.log(sqrArr([2, 4, 5, 6]))


// ============================================================
/**Дан массив с числами. Найдите сумму этих чисел */
const findSum = arr => {
  let result = 0

  arr.forEach(num => result += num)

  return result
}

// console.log(findSum([2, 2, 2, 4]))


// =========================================================
/**Дан массив с числами. Оставьте в нем только отрицательные числа. */
const arrOfOddNum = arr => arr.filter(num => num < 0)

// console.log(arrOfOddNum([1, 2, 3, -4, 2, -6]))


// ===================================================
/**Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. */
const arrOfLongStrings = arr => arr.filter(str => str.length > 5)

// console.log(arrOfLongStrings(["vjdshv", "bhcb", "bckjafvdf", "nju"]))


// =======================================================
/**Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы. */
const protoArr = arr => arr.filter(element => Array.isArray(element))

// console.log(protoArr([1, 2, [3, 4, 5], 5, [6, 7]]))


// ============================================
/**Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве. */
const sumOfNegativeNum = arr => arr.filter(num => num < 0).length

// console.log(sumOfNegativeNum([1, -2, -3, -4, 5]))


// ==================================================
/**Дан массив с числами. Найдите сумму этих чисел. */
const sumOfNum = arr => arr.reduce((total, num) => total + num)

// console.log(sumOfNum([2, 3, 4, 5, 6]))


// =======================================================
/**Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0. */
const sumOfFirstNum = arr => {
  let total = 0

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) break
    else total += arr[i]
  }
  return total
}

// console.log(sumOfFirstNum([1, 0, 3, 0, 5]))

// варіант з reduce()
var arr = [1, 2, 3, 0, 4, 5, 6];
var answer = 0;
var result = arr.reduce(function(sum, elem) {
	if (elem == 0) {
		answer = sum;
	} else {
		return sum + elem;
	}
});
if(answer == undefined){answer = result};
// alert(answer);


// ===========================================================
const array = ['apple', '-pen', '-pineapple', '-pen'];
const x = array
.reduce((acc, curr, i, arr) => {
    if(i === 2) arr.splice(1);  // eject early
    return acc += curr;
  }, '');
// console.log('x: ', x);  // x:  apple-pen-pineapple

// const colors = ["red", "green", "blue"];

// colors.splice(1);
// console.log(colors); // ["red", "green", "purple", "blue"]


// ===================================================!!!!!!!!!!!!!!!!!
/**Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */
const arrX = arr => {
  return arr.reduce((acc, element, index, array) => {
    // console.log(acc)
    return acc += element
    // return index + 1
    // return acc
  })
}

// console.log(arrX([2, 4, 6, 0, 2, 3]))


// const aRR = [0, 4, 1, 0, 2, 5, 6]
// let flag = 0
// let ind = 0

// for (let i = 0; i < aRR.length; i++) {
//   if (flag < 10) {
//     flag += aRR[i]
//     ind = i
//   } else break
// }

// console.log(ind + 1)


// =====================================================
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// console.log(ancestor)
// console.log(parent)
// console.log(child.name)


// =======================================================

class Storage {

    constructor(items) {
      this.items = items;
    }
    getItems() {
      return this.items;
    }
    addItem(newItem) {
      this.items.push(newItem);
    }
    removeItem(itemToRemove) {
      this.items.splice(this.items.indexOf(itemToRemove), 1);
    }

}

// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage)
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// =========================================================
function duplicateCount(text) {
  return [...text.toLowerCase()].filter((element, index, array) =>
    array.indexOf(element) !== index)
    .filter((element, index, array) => array.indexOf(element) === index)
    .length
}

// console.log(duplicateCount("abAbcdddfggg"))


// =========================================================!!!!!!!!!!!!!
function findOdd(Arr) {
  let counter = 0

  for (const number of [...Arr]) {
    console.log(number)
    for (let i = Arr.indexOf(number + 1); i < Arr.length; i += 1) {
      if (number === Arr[i]) {
        Arr.splice(i, 1)
        Arr.splice(Arr.indexOf(number), 1)
      }
    }
  }
  
  return Arr
}

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));


// ==========================================================
function printerError(s) {
  const creatArr = [...s]
  let err = 0
    
  creatArr.forEach((element) => {
    if(element > "m") err += 1
  })

  return `${err}/${creatArr.length}`
}

// console.log(printerError("aaabbbbhaijjjmxy"))


// =============================================================
function abbrevName(name) {
  const arrOfLetters = name.toUpperCase().split(" ")

  return `${arrOfLetters[0][0]}.${arrOfLetters[1][0]}`
}

// console.log(abbrevName("Sam harris"))


// ======================================================
function isPangram(string) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const arrOfStrInLowerCase = string.toLowerCase().split("")

  for (let i = 0; i < alphabet.length; i += 1) {
    if(!arrOfStrInLowerCase.includes(alphabet[i])) return false
  }
  
  return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."))


// ======================================================
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

const updateRecords = (records, id, prop, value) => {
  const currentAlb = records[id]
  const { albumTitle, artist, tracks } = currentAlb
  
  if (value === "") {
    delete currentAlb[prop]
    return currentAlb
  } 
  if (prop !== "tracks") currentAlb[prop] = value
  if (prop === "tracks") {
      (currentAlb.hasOwnProperty(prop))
      ? tracks.push(value)
      : currentAlb[prop] = [value]
  }
  return currentAlb
}

// console.log(updateRecords(recordCollection, 2548, 'artist', ''));
// console.log(recordCollection)


// =========================================================
const getMiddle = text => {
  let ind = 0
  const textLength = text.length

  if (textLength % 2 === 0) {
    ind = textLength / 2
    return text[ind - 1] + text[ind]
  } else {
    ind = Math.floor(textLength / 2)
    return text[ind]
  }
}

// console.log(getMiddle("test"))


// ===========================================================
function countPositivesSumNegatives(input) {
  if (!input) return new Array
  if (!Array.isArray(input)) return new Array
  if (input.every(el => el === 0)) return new Array
  let countPositives = 0
  let sumNegatives = 0
  
  input.forEach(element => {
    if (element > 0) countPositives += 1
    if (element < 0) sumNegatives += element
  })

  return [countPositives, sumNegatives]
}

// console.log(countPositivesSumNegatives([0, 0]))


// ===========================================================
// const high = str => {
//   const alphabetList = "abcdefghijklmnopqrstuvwxyz".split("")
//   const arrOfStr = str.split(" ")
//   let acc = 0
//   let ind = 0

//   arrOfStr.forEach((element, index) => {
//     let sumOfChars = 0;

//     [...element].forEach(char => {
//       sumOfChars += alphabetList.indexOf(char) + 1
//     })

//     if (acc < sumOfChars) {
//       acc = sumOfChars
//       ind = index
//     }
//   })

//   return arrOfStr[ind]
// }


// console.log(high('take me to semynak'))
// console.log(high('aa bb aa'))


// =========================================================
const charToScore = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };


function high(x){
  const array = x.split(" ");
  const arrayOfScores = array
    .map(word => word.split("")
    .reduce((score, char) => score + charToScore[char], 0))
  const indexOfResult = arrayOfScores.indexOf(Math.max(...arrayOfScores));
  
  return array[indexOfResult];
}

// console.log(high('take me to semynak'))
// console.log(high('aa bb aa'))


// ============================================================
const findUniq = arr => {
  return [...arr].sort((x, y) => x - y)
  .find((element, index, array) => element !== array[1])
}

// console.log(findUniq([ 1, 1, 2, 1, 1 ]))


// ========================================================
function highAndLow(numbers) {
  const sortedArr = numbers.split(" ").sort((x, y) => x - y)
  return `${sortedArr[sortedArr.length - 1]} ${sortedArr[0]}`
}

// console.log(highAndLow("1 9 3 4 -5"))


// =========================================================
const DNAStrand = (dna) => {
  let dnaArr = [...dna]
  
    dnaArr.forEach((element, index, array) => {
    if (element === "A") return array.splice(index, 1, "T")
    if (element === "T") return array.splice(index, 1, "A")
    if (element === "C") return array.splice(index, 1, "G")
    if (element === "G") return array.splice(index, 1, "C")
    
    })

  return dnaArr.join("")
}

// console.log(DNAStrand("ATTGC"))


// ==========================================================
const points = games => {
  let total = 0

  games.forEach(game => {
    if(game[0] > game[2]) total += 3
    if(game[0] < game[2]) total
    if(game[0] === game[2]) total += 1
  })

  return total
}

// console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))


// ========================================================
const testArr = [1, 2, 3, 4, 5]
const testArr2 = ["serhii", "iryna", "daniel", "artur"]

const each = (array, callback) => {
  return array.map(element => callback(element))
}

function multiply(num) {
  return num * 2
}

function reverse(str) {
  return [...str].reverse().join("")
}

function firstCharToUpperCase(str) {
  let arrFromStr = [...str]

  arrFromStr[0] = arrFromStr[0].toUpperCase()

  return arrFromStr.join("")
}

// console.log(each(testArr, multiply))
// console.log(each(testArr2, reverse))
// console.log(testArr2)
// console.log(each(testArr2, firstCharToUpperCase))


// =========================================================
// Налаштування
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, prop) => {
  const namesList = contacts.map(contact => contact.firstName)
  if (!namesList.includes(name)) return "No such name"

  const finededContact = contacts.find(contact => contact.firstName === name)

  return Object.keys(finededContact).includes(prop)
    ? finededContact[prop]
    : "No such property"
}

// console.log(lookUpProfile("Akira", "likes"));


// ===========================================================
function countdown(n){
  if(n < 1){
  return [];
  } else {
    const x = countdown(n - 1)
    x.unshift(n)
    return x
  }
}
// ================================
function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) {
    return [startNum]
  } else {
    const numbersArr = rangeOfNumbers(startNum, endNum - 1)
    numbersArr.push(endNum)
    return numbersArr
  }
};

// console.log(rangeOfNumbers(6, 9))


// ============================================================
class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear()
    return currentYear - this.year
  }

}

const mango = new Student("Mango", "Popelka", 2019)
// console.log(mango.getCourse())
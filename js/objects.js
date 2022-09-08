// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
function countProps(object) {
  let propCount = 0;
//   Change code below this line
    propCount = Object.keys(object).length;
//   Change code above this line
  return propCount;
}
// console.log(countProps({ name: "Mango", age: 2 }));


// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
// console.log(hexColors);
// console.log(rgbColors);


// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const allPropValuesArr = [];

  for (const product of products) {
    let keys = Object.keys(product);

    if (keys.includes(propName)) {
    allPropValuesArr.push(product[propName]);
  }
}
 return allPropValuesArr;
  // Change code above this line
}
// console.log(getAllPropValues("hddsc"));


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {      
      if (potion.name === potionName) {
        let potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);
      }
      return `Potion ${potionName} is not in inventory!`;
    }
  },

  updatePotionName(oldName, newName) {
    // const potionIndex = this.potions.indexOf(oldName);
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        return potion.name = newName;
      }
    }
      return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.potions);
console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("Dragon breath"));
atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.getPotions());
atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.getPotions());
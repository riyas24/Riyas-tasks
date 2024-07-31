const arrayOfObjects = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", occupation: "Engineer" },
  { id: 3, country: "USA", hobby: "Reading" },
  { id: 4, name: "Charlie", age: 25, occupation: "Artist" },
  { id: 5, hobby: "Gardening", favoriteColor: "Green" },
];

const findKey1 = { name: "Bob" };
const findKey2 = { age: 25, occupation: "Artist" };
const findKey3 = { age: 30, occupation: "Artist" };

const result = (array, obj) => {
  return array.filter((data) => {
    for (let key in obj) {
      if (obj[key] !== data[key]) return false;
    }
    return true;
  });
};



console.log("test case 1", result(arrayOfObjects, findKey1));
console.log("test case 2", result(arrayOfObjects, findKey2));
console.log("test case 3", result(arrayOfObjects, findKey3));

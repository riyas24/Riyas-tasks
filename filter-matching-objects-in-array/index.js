const arrayOfObjects = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", occupation: "Engineer" },
  { id: 3, country: "USA", hobby: "Reading" },
  { id: 4, name: "Charlie", age: 25, occupation: "Artist" },
  { id: 5, hobby: "Gardening", favoriteColor: "Green" },
];

const obj = { age: 25, occupation: "Artist" };

const matchingObjects = arrayOfObjects.filter((data) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === data[key]) {
        return true;
      }
    }
  }
});

console.log("Matching Objects In Array", matchingObjects);

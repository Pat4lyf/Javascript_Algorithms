//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source);
  arr = collection.filter((obj) => {
    return sourceKeys.every((key) => {
      return obj[key] == source[key];
    });
  });

  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

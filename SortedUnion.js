//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
function uniteUnique(arr) {
  const args = [...arguments];
  let newArr = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!newArr.includes(args[i][j])) {
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
function destroyer(arr) {
  const args = [...arguments];

  return arr.filter((item) => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

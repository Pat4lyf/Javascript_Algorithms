//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
function addTogether() {
  const [first, second] = arguments;
  //checking if the first argument is a number
  if (typeof first !== "number") return undefined;
  //returning a callback function when only one argument is passed
  if (second === undefined) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

console.log(addTogether(2)(3));

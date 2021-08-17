//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      let missingLetter = String.fromCharCode(str.charCodeAt(i) + 1);
      return missingLetter;
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));

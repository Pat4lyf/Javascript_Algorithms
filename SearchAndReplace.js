//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
function myReplace(str, before, after) {
  let firstLetterFromBefore = before.charAt(0);
  if (firstLetterFromBefore.match(/[A-Z]/)) {
    let newAfter;
    newAfter = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, newAfter);
  } else {
    after = after.toLowerCase();
  }

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);

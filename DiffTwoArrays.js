//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  let combinedArray = arr1.concat(arr2);
  return combinedArray.filter((item) => {
    if (!arr1.includes(item) || !arr2.includes(item)) return newArr.push(item);
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

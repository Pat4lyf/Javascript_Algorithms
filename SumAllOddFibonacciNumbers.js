//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
  let prev = 0;
  let current = 1;
  let sum = 0;

  while (current <= num) {
    if (current % 2 != 0) {
      sum += current;
    }
    current += prev;
    prev = current - prev;
  }

  return sum;
}

console.log(sumFibs(4));

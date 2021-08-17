//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
function sumPrimes(num) {
  let prime = 2;
  let sum = 0;

  let isPrime = (val) => {
    for (let i = 2; i <= Math.sqrt(val); i++) {
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  };

  while (prime <= num) {
    if (isPrime(prime)) {
      sum += prime;
    }
    prime++;
  }

  return sum;
}

console.log(sumPrimes(10));

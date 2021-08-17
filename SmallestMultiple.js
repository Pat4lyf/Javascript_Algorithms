//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons(arr) {
    const[min, max] = arr.sort((a,b) => a-b); //sort the array in ascending order
    const numberOfDivisors = max - min + 1; // count the total numbers between the min and max values inclusive
   
    let upperBound = 1;
    for(let i=min; i<=max; i++) {
      upperBound *= i; //getting the highest possible multiple common to all the numbers
    }
  
    //any multiple will always start from max. Iterate till u get the smallest multiple common to all numbers
    for(let multiple = max; multiple<upperBound; multiple += max) {
     let count = 0;
      for(let i = min; i<=max; i++) {
        if(multiple % i == 0) 
        count++;
      }
    if(numberOfDivisors === count) {
        return multiple;
    }
  }
  
   
  }
  
  
  console.log(smallestCommons([5, 1]));
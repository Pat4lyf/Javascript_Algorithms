//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

function steamrollArray(arr) {
    let newArr = [];
    for(let i =0; i<arr.length; i++) {
      if(Array.isArray(arr[i])) {
       // Recursively flatten entries that are arrays
      //  and push into the newArray
        newArr.push(...steamrollArray(arr[i]));
      } else{
     // Copy contents that are not arrays
      newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
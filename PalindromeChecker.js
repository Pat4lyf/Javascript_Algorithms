//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
function palindrome(str) {
    let input = str.replace(/\W+|_/g, "").toLowerCase();
  
  
    if(input.length < 3) {
      if(input.charAt(0) == input.charAt(1)) {
        return true;
      } else{
        return false;
      }
    }
    if(input.length === 3) {
      if(input.charAt(0) == input.charAt(2)) {
        return true;
    } else {
      return false;
    }
  }
  
    if(input.length > 3) {
      if(input.charAt(0) != input.charAt(input.length-1)){
        return false;
      } else {
         input = input.slice(1, input.length - 1);
        return palindrome(input);
      }
    }
  
  }
  
  console.log(palindrome("five|\_/|four"));
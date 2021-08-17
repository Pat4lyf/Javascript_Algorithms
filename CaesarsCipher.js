//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) {
  let ciphers = [];
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    //getting the character at the ith index
    let char = str.charAt(i); 
    //getting the ASCII code for the character at the ith index
    let charCode = str.charCodeAt(i);

    //checking if the character falls between A and M inclusive and shifting by 13 places
    if (charCode > 64 && charCode < 78) {
      let newChar = String.fromCharCode(charCode + 13);
      arr.push(newChar);
    } 

    //checking if the character if from N-Z and shifting by 13 places
    else if (charCode > 77 && charCode < 91) {
      let newChar = String.fromCharCode(77 - (90 - charCode));
      arr.push(newChar);
    } 
    
    //checking if the character is not a letter and leaving it unchanged
    else if (charCode > 32 && charCode < 65) {
      arr.push(char);
    }

    //checking if the character is a space and emptying 
    //the letters in the arr object into the ciphers object
    if (charCode == 32) {
      ciphers.push(arr.join(""));
      arr.length = 0;
    }

    //checking if the end of the string has been reached
    if (i == str.length - 1) {
      ciphers.push(arr.join(""));
    }
  }

  return ciphers.join(" ");
}

console.log(rot13("SERR PBQR PNZC"));

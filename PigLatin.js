//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
function translatePigLatin(str) {
  //defining a regex pattern that have vowel at the beginning of the word
  let regex = /^[aeiou]/; 
  //checking if the input string matches the regex pattern
  if (str.match(regex)) return str + "way";
  else {
      //copying the input string into a new variable
    let newStr = str.slice();
    let count = 0;
    //defining a while loop that loops until the input string matches the regex 
    //or the number of loops equals the length of the input string
    while (!newStr.match(regex)) {
        //each time the first letter in the string is removed and added to the end of the string
      newStr = newStr.slice(1) + newStr[0];
      count++;
      if (count == str.length) break;
    }

    if (newStr.match(regex)) return newStr + "ay";
  }

  return str + "ay";
}

translatePigLatin("consonant");

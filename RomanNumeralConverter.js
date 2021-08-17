//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
function convertToRoman(num) {
  const romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let romanKeys = Object.keys(romanNumerals).reverse();

  let result = "";

  romanKeys.forEach((key) => {
    while (key <= num) {
      result += romanNumerals[key];

      num -= key;
    }
  });

  return result;
}

console.log(convertToRoman(97));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
function binaryAgent(str) {
  let binaryString = str.split(" ");
  let decimal = [];
  for (let i = 0; i < binaryString.length; i++) {
      //looping through the array and converting each binary number to a decimal
    decimal.push(parseInt(binaryString[i], 2));
  }
//converting each decimal to a character and joining them to form a string
  return decimal.map((each) => String.fromCharCode(each)).join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

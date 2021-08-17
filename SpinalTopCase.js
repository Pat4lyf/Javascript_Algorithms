//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
function spinalCase(str) {
  return str
    .split(/\W|_|(?=[A-Z])/) //match any non alpha-numeric character, dash and a 
    //positive lookahead(which checks for the presence of a capital letter but does not match it)
    .join("-")
    .toLowerCase();
}
console.log(spinalCase("This Is Spinal Tap"));

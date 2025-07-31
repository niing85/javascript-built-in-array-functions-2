function isPalindrome(string) {
  // Start coding here
  let stringSplit = string.split("");
  let stringReverse = stringSplit.reverse();
  let result = stringReverse.join("");
  return string == result;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false

//console.log("aeiou".split("").reverse().join("")) ; another reverse
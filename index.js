
function isPalindrome(string) {
  // Write your algorithm here
  const len = string.length; 
  for(let i=0; i<len/2; i++){
    if(string[i] !== string[len-1-i]){
      return false
    }
  }
  return true
}
console.log(isPalindrome('abba'))
console.log(isPalindrome('words'))


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

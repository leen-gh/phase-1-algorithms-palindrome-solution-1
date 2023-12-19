function isPalindrome(word) {
  word = word.toLowerCase()
  word = word.replace(/[^a-z0-9]/g, '')
  let reversed = word.split('').reverse().join('')
  return word === reversed
}

/* 
  Add your pseudocode here
  function isPalindrome(word):
    word = CONVERT_TO_LOWERCASE(word)
    word = replace-numbers-and-sigins(word)
    //getting the reversed word by tusing thress methods
    reversed = split-charcters(word).reverse(word).rejoin-the-characters
    // Check if the original word is equal to its reversed version
    return (true if word is equal to reversed else false)

end function
*/

/*
  Add written explanation of your solution here
  first i had to make sure that the word is in one condtion y=that is small letters
  then make sure that the word do not contain any non alphapets charachters 
  reversing the leters after spliting them and re join them 
  returning the result of checking the equlatiy of the word tha its reversed
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


var reverseWords = function(s) {
    // Trim leading and trailing spaces, then split the string into an array of words
    const wordsArray = s.trim().split(/\s+/);
  
    // Reverse the array of words
    const reversedArray = wordsArray.reverse();
  
    // Join the reversed array into a string with a single space between words
    const reversedString = reversedArray.join(' ');
  
    return reversedString;
  }
  
  // Example usage:
  const inputString = "  Hello  World   ";
  const reversedResult = reverseWords(inputString);
  console.log(reversedResult);  // Output: "World Hello"
  
  
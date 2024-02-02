var gcdOfStrings = function(str1,str2){

    // if concatenation is not equal then return empty string
    if(str1 + str2 !== str2 +str1){
        return "";
    }
    
    //to find GCD length
    const gcdLength = gcd(str1.length , str2.length);

    /* Substring Return: Finally, the function returns a substring of str1 starting
      from index 0 and extending up to the calculated gcdLength. This substring represents
      the largest common divisor string.*/
      return str1.substring(0 , gcdLength);

}
// helper functon to find gcd
function gcd(a,b){
    return b === 0? a : gcd(b, a%b);
}

//example
const str1 = 'ABCABC';
const str2 = 'ABC';
const result = gcdOfStrings(str1,str2);
console.log(result);

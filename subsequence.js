function isSubsequence(s, t) {
    let sPointer = 0;
    let tPointer = 0;
  
    while (sPointer < s.length && tPointer < t.length) {
      if (s[sPointer] === t[tPointer]) {
        sPointer++;
      }
      tPointer++;
    }
  
    return sPointer === s.length;
  }
  
  // Example usage:
  const s = "abc";
  const t = "ahbgdc";
  const result = isSubsequence(s, t);
  console.log(result); // Output: true
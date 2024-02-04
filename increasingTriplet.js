
var increasingTriplet = function(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
  
    for (const num of nums) {
      if (num <= min) {
        min = num;
      } else if (num <= secondMin) {
        secondMin = num;
      } else {
        // Found a triplet
        return true;
      }
    }
  
    // No triplet found
    return false;
  }
  
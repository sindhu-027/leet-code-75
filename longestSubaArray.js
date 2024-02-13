function longestSubarray(nums) {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let zeroCount = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left);

        right++;
    }

    // If all elements are 1, return length - 1
    return maxLen === nums.length ? maxLen - 1 : maxLen;
}

// Example usage:
const nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1];
const result = longestSubarray(nums);
console.log(result);
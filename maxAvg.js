function findMaxAverage(nums, k) {
    let sum = 0;
    
    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let maxSum = sum;

    // Use a sliding window to iterate through the array
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]; // Update the sum by adding the next element and subtracting the first element in the window
        maxSum = Math.max(maxSum, sum); // Update the maximum sum if the current sum is greater
    }

    // Calculate the maximum average by dividing the maximum sum by k
    const maxAverage = maxSum / k;

    return maxAverage;
}

// Example usage:
const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
const result = findMaxAverage(nums, k);

console.log(result); // Output: 12.75
var maxOperations = function(nums, k) {
    // Create a hash map to store the frequency of each number in the array
    const numFrequency = new Map();

    // Initialize the count of operations
    let count = 0;

    // Iterate through the array
    for (const num of nums) {
        const complement = k - num;

        // Check if the complement is present in the hash map
        if (numFrequency.has(complement) && numFrequency.get(complement) > 0) {
            // Increment the count of operations
            count++;

            // Update the frequency in the hash map
            numFrequency.set(complement, numFrequency.get(complement) - 1);
        } else {
            // Update the frequency of the current number in the hash map
            numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
        }
    }

    // Return the final count of operations
    return count;
}

// Example usage
const nums = [1, 2, 3, 4, 5];
const k = 6;
console.log(maxOperations(nums, k)); // Output: 2

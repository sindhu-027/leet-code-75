var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the width of the container
        const width = right - left;

        // Calculate the height of the container (minimum of the two line heights)
        const containerHeight = Math.min(height[left], height[right]);

        // Calculate the area and update maxWater if needed
        const currentWater = width * containerHeight;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointers based on the smaller height to potentially find a larger container
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // Output: 49

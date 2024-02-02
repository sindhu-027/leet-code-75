function canPlaceFlowers(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            // Check if the current plot and its adjacent plots are empty
            const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
            const nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1; // Plant a flower in the current plot
                count++;

                if (count >= n) {
                    return true; // Required number of flowers planted
                }
            }
        }
    }

    return count >= n;
}

// Example usage:
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result); // Output: true
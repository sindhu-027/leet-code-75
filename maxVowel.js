function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowelCount = 0;
    let currentVowelCount = 0;

    // Count vowels in the first window of length k
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowelCount++;
        }
    }

    maxVowelCount = currentVowelCount;

    // Slide the window through the rest of the string
    for (let i = k; i < s.length; i++) {
        // Remove the leftmost character from the window
        if (vowels.has(s[i - k])) {
            currentVowelCount--;
        }

        // Add the current character to the window
        if (vowels.has(s[i])) {
            currentVowelCount++;
        }

        // Update the maximum vowel count
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
    }

    return maxVowelCount;
}

// Example usage:
const s = "abciiidef";
const k = 3;

const result = maxVowels(s, k);
console.log(result); // Output: 3
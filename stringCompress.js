var compress = function(chars) {
    let writeIndex = 0; // Pointer for writing compressed characters
    let readIndex = 0;  // Pointer for reading consecutive repeating characters

    while (readIndex < chars.length) {
        let currentChar = chars[readIndex];
        let count = 0;

        // Count consecutive repeating characters
        while (readIndex < chars.length && chars[readIndex] === currentChar) {
            readIndex++;
            count++;
        }

        // Write the character and its count to the array
        chars[writeIndex] = currentChar;
        writeIndex++;

        if (count > 1) {
            // If the count is greater than 1, write its digits to the array
            let countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIndex] = countStr[i];
                writeIndex++;
            }
        }
    }

    return writeIndex;
}

// Example usage:
let inputArray = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
let compressedLength = compress(inputArray);

// The modified inputArray will contain the compressed string
console.log(inputArray.slice(0, compressedLength)); // Output: ['a', '2', 'b', '2', 'c', '3']

    
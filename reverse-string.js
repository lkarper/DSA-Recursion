// Takes a string as input, reverses the string, and returns the new string
const reverseString = (string) => {
    // Base case
    if (string.length === 1) {
        return string;
    }
    
    // General case
    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
};

console.log(reverseString('shelby'));
console.log(reverseString('banana'));
console.log(reverseString('45'));
console.log(reverseString('x'));

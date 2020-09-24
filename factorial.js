// A recursive function that finds the factorial of a given number
const factorial = (num) => {
    // Error handling
    if (num < 0) {
        return 'Cannot find the factorial of a negative number';   
    }

    // Exception to the rule of factorials
    if (num === 0) {
        return 1;
    }

    // Base case
    if (num === 1) {
        return 1;
    }

    // General case
    return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(4));

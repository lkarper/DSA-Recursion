// Calculates a number (base) raised to the power of (exponent)
const powerCalculator = (base, exponent) => {
    // Error handling
    if (exponent < 0) {
        return 'Exponent should be >= 0';
    }

    // Exception to the rule of powers
    if (exponent === 0) {
        return 1;
    }

    // Base case
    if (exponent === 1) {
        return base;
    } 

    // General case
    return base * powerCalculator(base, exponent - 1);
}

console.log(powerCalculator(10, 2));
console.log(powerCalculator(2, 3));
console.log(powerCalculator(10, -2));
console.log(powerCalculator(10, 0));
console.log(powerCalculator(10, 1));

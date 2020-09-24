/* 
    Calculate the nth triangular number. 
    A triangular number counts the objects that can form an equilateral triangle; 
    equal to the sum of the n natural numbers from 1 to n.
*/
const nthTriangularNumber = (number) => {
    // Error handling
    if (number <= 0) {
        return 'Nuber must be positive';
    }

    // Base case
    if (number === 1) {
        return number;
    }

    // General case
    return number + nthTriangularNumber(number - 1);
}

console.log(nthTriangularNumber(8));
console.log(nthTriangularNumber(7));
console.log(nthTriangularNumber(6));
console.log(nthTriangularNumber(5));
console.log(nthTriangularNumber(4));
console.log(nthTriangularNumber(3));
console.log(nthTriangularNumber(2));
console.log(nthTriangularNumber(1));

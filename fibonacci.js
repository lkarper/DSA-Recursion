// Calculates the nth Fibonacci number
const nthFibonacci = (n, array = []) => {

    if (array.length === n) {
        return array.join(', ');
    }

    if (array.length === 0) {
        array = [1];
        return nthFibonacci(n, array);
    }

    if (array.length === 1) {
        array = [...array, 1];
        return nthFibonacci(n, array);
    }

    array = [...array, (array[array.length - 1] + array[array.length - 2])];
    return nthFibonacci(n, array);
}

console.log(nthFibonacci(7));
console.log(nthFibonacci(17));

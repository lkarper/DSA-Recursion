// Splits a string based on a separator (similar to String.prototype.split)
const stringSplitter = (string, splitChar, array = []) => {
    if (string.length === 1 && string === splitChar) {
        return [...array];
    }

    if (string.length === 1 && string !== splitChar) {
        array[array.length - 1] = array[array.length - 1] + string;
        return [...array];
    }

    if (string[0] !== splitChar) {
        if (array.length === 0) {
            array.push(string[0]);
        } else {
            array[array.length - 1] = array[array.length - 1] + string[0];
        }
        return stringSplitter(string.slice(1, string.length), splitChar, [...array]);
    }

    if (string[0] === splitChar) {
        array[array.length] = string[1];
        return stringSplitter(string.slice(2, string.length), splitChar, [...array]);
    }
}

console.log(stringSplitter('02/20/2020', '/'));
console.log(stringSplitter('Shelby|is|a|great|pup!', '|'));
console.log(stringSplitter('|Shelby|is|a|great|pup!|', '|'));

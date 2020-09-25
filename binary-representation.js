const binaryConverter = (num, bin = []) => {
    if (num === 0) {
        if (bin.length === 0) {
            return console.log(0);
        }
        return console.log(bin.join(''));
    }
    if (num % 2 === 1) {
        bin = [1, ...bin];
    } else {
        bin = [0, ...bin];
    }

    binaryConverter(Math.trunc(num/2), bin);
}

binaryConverter(0);
binaryConverter(1);
binaryConverter(3);
binaryConverter(25);
binaryConverter(250);

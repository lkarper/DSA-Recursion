const countingSheep = (sheep) => {
    // Base case
    if (sheep === 0) {
        return console.log(`All sheep jumped over the fence`);
    }

    // General case
    console.log(`${sheep}: Another sheep jumps over the fence`);
    return countingSheep(sheep - 1);
}

countingSheep(5);
countingSheep(3);
countingSheep(14);

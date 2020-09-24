// Recursively find a way out of a maze represented as an N*M matrix
const mazeRunner = (maze, n = 0, m = 0, steps = '', coordinates = []) => {

    if (m < maze[n].length - 1 && maze[n][m + 1] === 'e') {
        
        return console.log(`Path to the exit: ${steps + 'R'}`);
    }
    if (n < maze.length - 1 && maze[n + 1][m] === 'e') {
        
        return console.log(`Path to the exit: ${steps + 'D'}`);
    }

    if (m < maze[n].length - 1 && !coordinates.includes(`(${m}, ${n})`)) {
        if (maze[n][m + 1] !== '*') {
            mazeRunner(maze, n, m + 1, steps + 'R', [...coordinates, `(${m}, ${n})`]);
        }
    }

    if (n < maze.length - 1 && !coordinates.includes(`(${m}, ${n})`)) {
        if (maze[n + 1][m] !== '*') {
            mazeRunner(maze, n + 1, m, steps + 'D', [...coordinates, `(${m}, ${n})`]);
        }
    }

    if (m > 0) {
        if (maze[n][m - 1] !== '*' && !coordinates.includes(`(${m}, ${n})`)) {   
            mazeRunner(maze, n, m - 1, steps + 'L', [...coordinates,`(${m}, ${n})`]);
        }
    }

    if (n > 0) {
        if (maze[n - 1][m] !== '*' && !coordinates.includes(`(${m}, ${n})`)) {
            mazeRunner(maze, n - 1, m, steps + 'U', [...coordinates, `(${m}, ${n})`]);    
        }
    }

}

mazeRunner([
    [' ', '*'],
    [' ', 'e'],
]);

mazeRunner([
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]);

mazeRunner([
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]);

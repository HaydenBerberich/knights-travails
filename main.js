const validMoves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

function knightMoves(start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const currPath = queue.shift();
    const currPosition = currPath.at(-1);
    for (const move of validMoves) {
      const nextPosition = [
        move[0] + currPosition[0],
        move[1] + currPosition[1],
      ];
      if (
        nextPosition[0] >= 0 &&
        nextPosition[0] < 8 &&
        nextPosition[1] >= 0 &&
        nextPosition[1] < 8
      ) {
        if (nextPosition[0] === end[0] && nextPosition[1] === end[1])
          return [...currPath, nextPosition];
        const key = `${nextPosition[0]}, ${nextPosition[1]}`;
        if (!visited.has(key)) {
          queue.push([...currPath, nextPosition]);
          visited.add(key);
        }
      }
    }
  }
}

console.log(knightMoves([0, 0], [7, 7]));

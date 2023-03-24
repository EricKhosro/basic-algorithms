// this is for two n*n matrixes ONLY!

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const b = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const matrixMult = (matrixA, matrixB) => {
  const res = new Array(matrixA.length);
  for (let p = 0; p < matrixA.length; p++) res[p] = new Array(matrixA.length);

  for (let i = 0; i < matrixA.length; i++)
    for (let j = 0; j < matrixB.length; j++) {
      res[i][j] = 0;
      for (let k = 0; k < matrixA.length; k++)
        res[i][j] += matrixA[i][k] * matrixB[k][j];
    }
  return res;
};

console.log(matrixMult(a, b));

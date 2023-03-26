// recursive fib

const fib = (i) => {
  if (i <= 1) return i;

  return fib(i - 1) + fib(i - 2);
};

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));

const fib2 = (n) => {
  const fibRes = [];
  fibRes[0] = 0;
  if (n > 0) {
    fibRes[1] = 1;
    for (let i = 2; i <= n; i++) fibRes[i] = fibRes[i - 1] + fibRes[i - 2];
  }
  return fibRes[n];
};

console.log(fib2(5));

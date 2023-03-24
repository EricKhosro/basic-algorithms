const fib = (i) => {
  if (i <= 1) return i;

  return fib(i - 1) + fib(i - 2);
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

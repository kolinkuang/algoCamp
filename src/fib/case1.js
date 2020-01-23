const TestUtil = require('../testUtil');

function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

console.time();
TestUtil.iterateBy(40, n => fib(n));
console.timeEnd();

console.time();
TestUtil.iterateBy2(40, n => fib(n));
console.timeEnd();
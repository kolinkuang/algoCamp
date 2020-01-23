const TestUtil = require('../testUtil');

function fib(n) {
    let cache = [];
    cache[1] = cache[2] = 1;
    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
}

console.time();
TestUtil.iterateBy(10000, n => fib(n));
console.timeEnd();
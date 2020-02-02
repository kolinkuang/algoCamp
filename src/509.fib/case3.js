const TestUtil = require('../testUtil');

function fib(N) {
    let cache = [];
    cache[0] = 0;
    cache[1] = 1;
    for (let i = 2; i <= N; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[N];
}

console.time();
TestUtil.iterateBy(10000, n => fib(n));
console.timeEnd();
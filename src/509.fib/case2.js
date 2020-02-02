const TestUtil = require('../testUtil');

function fib(n) {
    let cache = [];
    _fib(cache, n);
}

function _fib(cache, n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    if (!cache[n]) {
        cache[n] = _fib(cache, n - 1) + _fib(cache, n - 2);
    }
    return cache[n];
}

console.time();
TestUtil.iterateBy(5000, n => fib(n));
console.timeEnd();
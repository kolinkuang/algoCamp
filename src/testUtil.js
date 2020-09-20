function* count(x = process.env.count) {
    while (--x) {
        yield x;
    }
}

function iterateBy(num, handlerFn) {
    for (let n of [...count(num)]) {
        handlerFn(n);
    }
}

let obj = {};
obj[Symbol.iterator] = count;

function iterateBy2(num, handlerFn) {
    process.env.count = num;
    for (let n of obj) {
        handlerFn(n);
    }
}

function assert(msg, actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${msg}; actual: ${actual}, expected: ${expected}`);
    }
}

module.exports = {iterateBy, iterateBy2, assert};
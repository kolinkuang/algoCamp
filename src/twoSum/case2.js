const TestUtil = require('../testUtil');
const list = [1, 2, 4, 3, 6, 5, 2, 4, 5];
const sum = 7;

function twoSum(list) {
    let cache = [];
    for (let num of list) {
        let index = cache.indexOf(sum - num);
        if (index !== -1) {
            return [cache[index], num];
            // console.log(cache[index], num);
        } else {
            cache.push(sum - num);
        }
    }
}

console.time();
TestUtil.iterateBy(100000, () => twoSum(list));
console.timeEnd();
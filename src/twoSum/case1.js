const TestUtil = require('../testUtil');
const list = [1, 2, 4, 3, 6, 5, 2, 4, 5];
const sum = 7;

function twoSum(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === sum) {
                return [list[i], list[j]];
                // console.log(list[i], list[j]);
                // break;
            }
        }
    }
}

console.time();
TestUtil.iterateBy(100000, () => twoSum(list));
console.timeEnd();
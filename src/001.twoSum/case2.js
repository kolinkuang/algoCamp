// const TestUtil = require('../testUtil');
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    let cache = {};
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        if (rest in cache) {
            return [cache[rest], i];
        } else {
            cache[nums[i]] = i;
        }
    }
}

console.log(twoSum(nums, target));

// console.time();
// TestUtil.iterateBy(100000, () => 001.twoSum(nums, target));
// console.timeEnd();
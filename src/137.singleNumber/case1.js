/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0;
        }
        map[nums[i]]++;
    }

    return Object.entries(map).filter(([key, value]) => value === 1)[0][0];
};

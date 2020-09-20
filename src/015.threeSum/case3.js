//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复
//的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例：
//
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//
//满足要求的三元组集合为：
//[
//  [-1, 0, 1],
//  [-1, -1, 2]
//]
//
// Related Topics 数组 双指针
// 👍 2335 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
    const length = nums.length;
    if (length < 3) {
        return [];
    }

    const result = [];

    nums.sort((a, b) => a - b);

    for (let inX = 0; inX < length; inX++) {
        if (nums[inX] === nums[inX - 1]) {
            continue;
        }

        let inY = inX + 1;
        let inZ = length - 1;

        while (inY < inZ) {
            if (inZ === inX) {
                inZ--;
            } else if (nums[inX] + nums[inY] + nums[inZ] === 0) {
                result.push([nums[inX], nums[inY], nums[inZ]]);
                while (nums[inY] === nums[inY + 1]) {
                    inY++;
                }
                inY++;

                while (nums[inZ] === nums[inZ - 1]) {
                    inZ--;
                }
                inZ--;
            } else if (nums[inX] + nums[inY] + nums[inZ] > 0) {
                inZ--;
            } else {
                inY++;
            }
        }
    }

    return result;
};

//leetcode submit region end(Prohibit modification and deletion)

const message = 'Input: %s, expect: %s, actual: %s';

function assert(nums, expected) {
    let actual = threeSum(JSON.parse(JSON.stringify(nums)));
    console.assert(JSON.stringify(actual) === JSON.stringify(expected), message, JSON.stringify(nums), JSON.stringify(expected), JSON.stringify(actual));

}

assert([0, 2, 1, -1, -4], [[-1, 0, 1]]);
assert([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]);
assert([1,-1,-1,0], [[-1,0,1]]);
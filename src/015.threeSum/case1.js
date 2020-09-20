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

    let result = [];

    let n = nums.length;

    // 数组排序（时间复杂度：少于10个元素：插入排序，O(N^2)；大于等于10个元素：快速排序，O(NlogN)）
    nums.sort((a, b) => a - b );

    // 对撞指针（时间复杂度：O(N^2)）
    for (let firstIndex = 0; firstIndex < n; firstIndex++) {
        if (firstIndex > 0 && nums[firstIndex] === nums[firstIndex - 1]) {
            continue;
        }
        let thirdIndex = n - 1;
        let target = -nums[firstIndex];

        for (let secondIndex = firstIndex + 1; secondIndex < n; secondIndex++) {
            // if second + third < target; then secondIndex++
            // if second + third > target; then thirdIndex--
            if (secondIndex > firstIndex + 1 && nums[secondIndex] === nums[secondIndex - 1]) {
                continue;
            }
            while (secondIndex < thirdIndex && nums[secondIndex] + nums[thirdIndex] > target) {
                thirdIndex--;
            }
            if (secondIndex === thirdIndex) {
                // 该轮循环不存在符合条件的 secondIndex 与 thirdIndex；firstIndex+1 继续
                break;
            }

            if (nums[secondIndex] + nums[thirdIndex] === target) {
                result.push([nums[firstIndex], nums[secondIndex], nums[thirdIndex]]);
            }
        }
    }

    return result;

    // 总时间复杂度：O(N^2)
    // 空间复杂度：O(logN)
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
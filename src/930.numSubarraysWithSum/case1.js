//给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
//
// 子数组 是数组的一段连续部分。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,0,1,0,1], goal = 2
//输出：4
//解释：
//有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
//
//
// 示例 2：
//
//
//输入：nums = [0,0,0,0,0], goal = 0
//输出：15
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 3 * 104
// nums[i] 不是 0 就是 1
// 0 <= goal <= nums.length
//
// Related Topics 数组 哈希表 前缀和 滑动窗口
// 👍 198 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    // 前缀和 + 哈希表？
    let count = 0;
    let sum = 0;
    let x = 0, y = x + 1;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        sum = 0;
        for (let j = i; j < length; j++) {
            // console.log(`i:${i}, j:${j}`);
            sum += nums[j];
            if (sum === goal) {
                count++;
            }
        }
    }

    return count;
};

let nums = [0,0,0,0,0];
let goal = 0;
console.log(numSubarraysWithSum(nums, goal)); // 15

// 时间复杂度：O(n ^ 2)
// 空间复杂度：O(1)
// n === nums.length

//leetcode submit region end(Prohibit modification and deletion)

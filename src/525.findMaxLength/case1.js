//给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
//
//
//
// 示例 1:
//
//
//输入: nums = [0,1]
//输出: 2
//说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
//
// 示例 2:
//
//
//输入: nums = [0,1,0]
//输出: 2
//说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 105
// nums[i] 不是 0 就是 1
//
// Related Topics 哈希表
// 👍 282 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const n = nums.length;
    if (n === 1) {
        return 0;
    }

    let maxLength = 0;
    let counter = 0;
    const map = new Map();
    map.set(0, -1);

    for (let i = 0; i < n; i++) {
        nums[i] === 1 ? counter++ : counter--;
        if (map.has(counter)) {
            maxLength = Math.max(maxLength, i - map.get(counter));
        } else {
            map.set(counter, i);
        }
    }

    return maxLength;
};

// 时间复杂度：O(n)
// 空间复杂度：O(n)
// n 为 nums.length
//leetcode submit region end(Prohibit modification and deletion)

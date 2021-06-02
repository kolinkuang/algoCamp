//给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
//
//
// 子数组大小 至少为 2 ，且
// 子数组元素总和为 k 的倍数。
//
//
// 如果存在，返回 true ；否则，返回 false 。
//
// 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。
//
//
//
// 示例 1：
//
//
//输入：nums = [23,2,4,6,7], k = 6
//输出：true
//解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
//
// 示例 2：
//
//
//输入：nums = [23,2,6,4,7], k = 6
//输出：true
//解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。
//42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
//
//
// 示例 3：
//
//
//输入：nums = [23,2,6,4,7], k = 13
//输出：false
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109
// 0 <= sum(nums[i]) <= 231 - 1
// 1 <= k <= 231 - 1
//
// Related Topics 数学 动态规划
// 👍 249 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    // 前缀和
    // 哈希表
    // 当 prefixSums[q]−prefixSums[p] 为 k 的倍数时，prefixSums[p] 和 prefixSums[q] 除以 k 的余数相同

    const n = nums.length;
    if (n < 2) {
        return false;
    }

    const sum = new Array(n).fill(0);
    sum[0] = nums[0];
    for (let i = 1; i < n; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }

    const modMap = new Map();
    modMap.set(0, -1);
    for (let i = 0; i < n; i++) {
        const mod = sum[i] % k;
        if (!modMap.has(mod)) {
            modMap.set(mod, i);
        } else if (i - modMap.get(mod) >= 2) {
            return true;
        }
    }

    return false;
};

const nums = [23,2,6,4,7];
const k = 13;
console.log(checkSubarraySum(nums, k));

// 时间复杂度：O(n)
// 空间复杂度：O(min(n, k))
// n 为 nums.length
//leetcode submit region end(Prohibit modification and deletion)

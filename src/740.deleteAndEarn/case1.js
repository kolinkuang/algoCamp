//给你一个整数数组 nums ，你可以对它进行一些操作。
//
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] +
// 1 的元素。
//
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
//
//
//
// 示例 1：
//
//
//输入：nums = [3,4,2]
//输出：6
//解释：
//删除 4 获得 4 个点数，因此 3 也被删除。
//之后，删除 2 获得 2 个点数。总共获得 6 个点数。
//
//
// 示例 2：
//
//
//输入：nums = [2,2,3,3,3,4]
//输出：9
//解释：
//删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
//之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
//总共获得 9 个点数。
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 2 * 104
// 1 <= nums[i] <= 104
//
// Related Topics 动态规划
// 👍 324 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let maxVal = 0;

    // 找到数组中的最大值
    for (let num of nums) {
        maxVal = Math.max(maxVal, num);
    }

    // 根据最大值排出原数组每个数字可获取的点数（哈希表）
    const list = new Array(maxVal + 1).fill(0);
    for (let num of nums) {
        list[num] += num;
    }

    // 找出每选择原数组的一个数字，所能得到的最大点数（选择 i 则排除 i - 1 及 i + 1，动态规划）
    let first = list[0], second = Math.max(list[0], list[1]);

    for (let i = 2; i < list.length; i++) {
        [first, second] = [second, Math.max(first + list[i], second)];
    }

    return second;

    // 时间复杂度：O(m+n)；n：原数组长度；m：原数组中的最大数字
    // 空间复杂度：O(m+n)；n：原数组长度；m：原数组中的最大数字
};
//leetcode submit region end(Prohibit modification and deletion)

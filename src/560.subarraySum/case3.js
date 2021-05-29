//给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
//
// 示例 1 :
//
//
//输入:nums = [1,1,1], k = 2
//输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
//
//
// 说明 :
//
//
// 数组的长度为 [1, 20,000]。
// 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
//
// Related Topics 数组 哈希表
// 👍 911 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0;

    let pre = 0;
    const map = new Map();
    map.set(0, 1);

    for (const x of nums) {
        pre += x;
        result += map.get(pre - k) || 0;
        map.set(pre, (map.get(pre) || 0) + 1);
    }

    return result;
};

// 时间复杂度：O(n) （n 为 nums.length，nums 被遍历一遍）
// 空间复杂度：O(n) (哈希表大小)
//leetcode submit region end(Prohibit modification and deletion)

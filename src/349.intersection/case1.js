//给定两个数组，编写一个函数来计算它们的交集。
//
//
//
// 示例 1：
//
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
//输出：[2]
//
//
// 示例 2：
//
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//输出：[9,4]
//
//
//
// 说明：
//
//
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。
//
// Related Topics 排序 哈希表 双指针 二分查找
// 👍 367 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const m = nums1.length, n = nums2.length;

    let p1 = 0, p2 = 0;

    const result = new Set();

    while (p1 < m && p2 < n) {
        const num1 = nums1[p1], num2 = nums2[p2];
        if (num1 === num2) {
            result.add(num1);
            p1++;
            p2++;
        } else if (num1 < num2) {
            p1++;
        } else {
            p2++;
        }
    }

    return Array.from(result);
};
//leetcode submit region end(Prohibit modification and deletion)

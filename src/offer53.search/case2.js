//统计一个数字在排序数组中出现的次数。
//
//
//
// 示例 1:
//
// 输入: nums = [5,7,7,8,8,10], target = 8
//输出: 2
//
// 示例 2:
//
// 输入: nums = [5,7,7,8,8,10], target = 6
//输出: 0
//
//
//
// 限制：
//
// 0 <= 数组长度 <= 50000
//
//
//
// 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-
//position-of-element-in-sorted-array/
// Related Topics 数组 二分查找
// 👍 154 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 二分查找
    let leftIdx, rightIdx;
    leftIdx = binarySearch(nums, target, true);
    rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx &&
        rightIdx < nums.length &&
        nums[leftIdx] === target &&
        nums[rightIdx] === target
    ) {
        return rightIdx - leftIdx + 1;
    }
    return 0;
};

function binarySearch(nums, target, lower) {
    const n = nums.length;
    let result = n;
    let low = 0, high = n - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) >> 1) + low;
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            high = mid - 1;
            result = mid;
            console.log('high:', high, 'result:', result);
        } else {
            low = mid + 1;
        }
    }

    return result;
}

// 时间复杂度：O(n)
// 空间复杂度：O(1)

const nums = [5,7,7,8,8,10], target = 8;
console.log(search(nums, target));
// 2

//leetcode submit region end(Prohibit modification and deletion)

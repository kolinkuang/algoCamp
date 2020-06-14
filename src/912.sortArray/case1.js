//给你一个整数数组 nums，请你将该数组升序排列。
//
//
//
//
//
//
// 示例 1：
//
// 输入：nums = [5,2,3,1]
//输出：[1,2,3,5]
//
//
// 示例 2：
//
// 输入：nums = [5,1,1,2,0,0]
//输出：[0,0,1,1,2,5]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000
//
//


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = function (nums) {
    return sort(nums);
};

function sort(nums) {
    //快速排序
    if (nums.length < 2) {
        return nums;
    }

    let mid = nums.splice(0, 1)[0];

    let left = [];
    let right = [];

    for (let i of nums) {
        if (i <= mid) {
            left.push(i);
        } else if (i > mid) {
            right.push(i);
        }
    }

    return sort(left).concat(mid, sort(right));
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
//leetcode submit region end(Prohibit modification and deletion)

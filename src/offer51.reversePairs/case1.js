//在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
//
//
//
// 示例 1:
//
// 输入: [7,5,6,4]
//输出: 5
//
//
//
// 限制：
//
// 0 <= 数组长度 <= 50000
// 👍 413 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {

    // 这样就不用每次都开辟一段新的内存空间为 temp 数组存放
    const temp = new Array(nums.length).fill(0);
    return convertResult(nums, 0, nums.length - 1);

    function convertResult(nums, left, right) {
        if (left >= right) {
            return 0;
        }

        let result = 0, mid = Math.floor((right - left) >> 1) + left;
        result += convertResult(nums, left, mid);
        result += convertResult(nums, mid + 1, right);

        let k = left, p1 = left, p2 = mid + 1;
        while (p1 <= mid || p2 <= right) {
            if ((p2 > right) || (p1 <= mid && nums[p1] <= nums[p2])) {
                temp[k++] = nums[p1++];
            } else {
                temp[k++] = nums[p2++];
                result += (mid - p1 + 1);
            }
        }

        for (let i = left; i <= right; i++) {
            nums[i] = temp[i];
        }

        return result;
    }

};

const input = [4,5,6,7];
console.log(reversePairs(input));
// 0

// 时间复杂度：O(nlog(n))，同归并排序
// 空间复杂度：O(n)，同归并排序
//leetcode submit region end(Prohibit modification and deletion)

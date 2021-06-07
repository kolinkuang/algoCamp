//给你一个整数数组 nums 和一个整数 target 。
//
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
//
//
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
//
//
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,1,1,1,1], target = 3
//输出：5
//解释：一共有 5 种方法让最终目标和为 3 。
//-1 + 1 + 1 + 1 + 1 = 3
//+1 - 1 + 1 + 1 + 1 = 3
//+1 + 1 - 1 + 1 + 1 = 3
//+1 + 1 + 1 - 1 + 1 = 3
//+1 + 1 + 1 + 1 - 1 = 3
//
//
// 示例 2：
//
//
//输入：nums = [1], target = 1
//输出：1
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 20
// 0 <= nums[i] <= 1000
// 0 <= sum(nums[i]) <= 1000
// -1000 <= target <= 100
//
// Related Topics 深度优先搜索 动态规划
// 👍 696 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    // 动态规划
    // i: 前 i 个数中选元素；是个数
    // j: 前 i 个数选中的元素的和；是和
    // dp[i][j]: 对应的方案数
    const n = nums.length;

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    // neg 为 nums 中需变为负数的元素的数值和；必然为非负整数
    const neg = (sum - target) / 2;

    if ((sum - target) % 2 > 0 || neg < 0) {
        return 0;
    }

    const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));

    // 初始化
    // dp[0][0] = 1
    // dp[0][1...] = 0
    dp[0][0] = 1;

    // j < num: dp[i][j] = dp[i - 1][j] (不选 num)
    // j >= num:
    // (不选 num): dp[i][j] = dp[i - 1][j]
    // (选 num): dp[i][j] = dp[i - 1][j - num]
    for (let i = 1; i <= n; i++) {
        const num = nums[i - 1];
        for (let j = 0; j <= neg; j++) {
            if (j < num) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num];
            }
        }
    }

    console.log(dp);

    return dp[n][neg];
};

const nums = [1,1,1,1,1];
const target = 3;
console.log(findTargetSumWays(nums, target));
// 5

// 时间复杂度：O(n * (sum - target))
// 空间复杂度：O(n * (sum - target))
// n 为 nums.length，sum 为 nums 中元素的数值和
//leetcode submit region end(Prohibit modification and deletion)

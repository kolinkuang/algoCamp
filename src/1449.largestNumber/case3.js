//给你一个整数数组 cost 和一个整数 target 。请你返回满足如下规则可以得到的 最大 整数：
//
//
// 给当前结果添加一个数位（i + 1）的成本为 cost[i] （cost 数组下标从 0 开始）。
// 总成本必须恰好等于 target 。
// 添加的数位中没有数字 0 。
//
//
// 由于答案可能会很大，请你以字符串形式返回。
//
// 如果按照上述要求无法得到任何整数，请你返回 "0" 。
//
//
//
// 示例 1：
//
//
//输入：cost = [4,3,2,5,6,7,2,5,5], target = 9
//输出："7772"
//解释：添加数位 '7' 的成本为 2 ，添加数位 '2' 的成本为 3 。所以 "7772" 的代价为 2*3+ 3*1 = 9 。 "977" 也是满足要
//求的数字，但 "7772" 是较大的数字。
// 数字     成本
//  1  ->   4
//  2  ->   3
//  3  ->   2
//  4  ->   5
//  5  ->   6
//  6  ->   7
//  7  ->   2
//  8  ->   5
//  9  ->   5
//
//
// 示例 2：
//
//
//输入：cost = [7,6,5,5,5,6,8,7,8], target = 12
//输出："85"
//解释：添加数位 '8' 的成本是 7 ，添加数位 '5' 的成本是 5 。"85" 的成本为 7 + 5 = 12 。
//
//
// 示例 3：
//
//
//输入：cost = [2,4,6,2,4,6,4,4,4], target = 5
//输出："0"
//解释：总成本是 target 的条件下，无法生成任何整数。
//
//
// 示例 4：
//
//
//输入：cost = [6,10,15,40,40,40,40,40,40], target = 47
//输出："32211"
//
//
//
//
// 提示：
//
//
// cost.length == 9
// 1 <= cost[i] <= 5000
// 1 <= target <= 5000
//
// Related Topics 字符串 动态规划
// 👍 70 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
    // 完全背包组合问题：动态规划
    const dp = new Array(10).fill().map(() => new Array(target + 1).fill(-Number.MAX_SAFE_INTEGER));
    const from = new Array(10).fill().map(() => new Array(target + 1).fill(0));

    // dp[i+1][j]: 使用前 i 个数位且花费总成本恰好为 j 时的最大位数
    // from[i+1][j]: 使用前 i 个数位且花费总成本恰好为 j 时，第 i 位成本的被选择次数
    // i: 选择前 i 个数位
    // j: 用前 i 个数位达成目标为 j
    dp[0][0] = 0;
    for (let i = 0; i < 9; i++) {
        const c = cost[i]
        for (let j = 0; j <= target; j++) {
            if (j < c) {
                dp[i + 1][j] = dp[i][j];
                from[i + 1][j] = j;
            } else {
                dp[i + 1][j] = Math.max(dp[i][j], dp[i + 1][j - c] + 1);
                if (dp[i][j] > dp[i + 1][j - c] + 1) {
                    from[i + 1][j] = j;
                } else {
                    from[i + 1][j] = j - c;
                }
            }
        }
    }

    if (dp[9][target] < 0) {
        return '0';
    }

    // console.log(dp);

    // console.log(from);

    const result = [];

    // TODO
    let i = 9, j = target;
    while (i > 0) {
        if (j === from[i][j]) {
            i--;
        } else {
            result.push(i);
            j = from[i][j];
        }
    }

    // for (let i = 9; i > 0; i--) {
    //     const count = from[i][target];
    //     for (let j = 0; j < count; j++) {
    //         result.push(cost[i]);
    //     }
    // }

    return result.join('');
};

const input = [4, 3, 2, 5, 6, 7, 2, 5, 5];
console.log(largestNumber(input, 9));
// '7772'
// 时间复杂度：O(n * target)
// 空间复杂度：O(n * target)
// n = cost.length = 9
//leetcode submit region end(Prohibit modification and deletion)

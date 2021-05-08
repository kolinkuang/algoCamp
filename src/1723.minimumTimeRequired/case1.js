//给你一个整数数组 jobs ，其中 jobs[i] 是完成第 i 项工作要花费的时间。
//
// 请你将这些工作分配给 k 位工人。所有工作都应该分配给工人，且每项工作只能分配给一位工人。工人的 工作时间 是完成分配给他们的所有工作花费时间的总和。请你
//设计一套最佳的工作分配方案，使工人的 最大工作时间 得以 最小化 。
//
// 返回分配方案中尽可能 最小 的 最大工作时间 。
//
//
//
// 示例 1：
//
//
//输入：jobs = [3,2,3], k = 3
//输出：3
//解释：给每位工人分配一项工作，最大工作时间是 3 。
//
//
// 示例 2：
//
//
//输入：jobs = [1,2,4,7,8], k = 2
//输出：11
//解释：按下述方式分配工作：
//1 号工人：1、2、8（工作时间 = 1 + 2 + 8 = 11）
//2 号工人：4、7（工作时间 = 4 + 7 = 11）
//最大工作时间是 11 。
//
//
//
// 提示：
//
//
// 1 <= k <= jobs.length <= 12
// 1 <= jobs[i] <= 107
//
// Related Topics 递归 回溯算法
// 👍 153 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    // 将 jobs 数组按降序排列
    jobs.sort((a, b) => b - a);

    // left 为 jobs 中的最大值，right 为 jobs 所有值之和
    let left = jobs[0], right = jobs.reduce((prev, curr) => prev + curr);

    // 利用二分法枚举分配方案
    while (left < right) {
        const mid = Math.floor((left + right) >> 1);
        if (check(jobs, k, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

function check(jobs, k, limit) {
    // workloads: 数组元素为每个工人对应的当前工作量
    const workloads = new Array(k).fill(0);
    // 利用回溯递归进行枚举
    return backTrack(jobs, workloads, 0, limit);
}

function backTrack(jobs, workloads, i, limit) {
    // 递归终止条件
    if (i >= jobs.length) {
        return true;
    }

    let curJob = jobs[i];
    for (let j = 0; j < workloads.length; j++) {
        if (workloads[j] + curJob <= limit) {
            // 不超过 limit 工作量限制，则尝试将该工作分配给工人 j
            workloads[j] += curJob;
            if (backTrack(jobs, workloads, i + 1, limit)) {
                // 回溯成功，直接返回 true
                return true;
            }

            // 回溯失败，方案不能达成，不能将该工作分配给工人 j，重新抽起该工作
            workloads[j] -= curJob;
        }

        // 若当前工人未被分配工作，则下一工人也必然未被分配工作；
        // 或者当前工作恰能使该工人的工作量达到了上限；
        // 这两种情况下我们无需继续尝试分配工作
        if (workloads[j] === 0 || workloads[j] + curJob === limit) {
            // 进行剪枝
            break;
        }
    }

    return false;
}

const jobs = [3,2,3], k = 3;
console.log(minimumTimeRequired(jobs, k));

// 时间复杂度：O(nlogn+log(S−M)×n!)，其中 n 是数组 jobs 的长度，S 是数组 jobs 的元素之和，M 是数组 jobs 中元素的最大值
// 空间复杂度：O(n)，取决于递归的栈的深度
//leetcode submit region end(Prohibit modification and deletion)

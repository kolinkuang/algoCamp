//在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示.
//
// 一次移动定义为选择 0 与一个相邻的数字（上下左右）进行交换.
//
// 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。
//
// 给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。
//
// 示例：
//
//
//输入：board = [[1,2,3],[4,0,5]]
//输出：1
//解释：交换 0 和 5 ，1 步完成
//
//
//
//输入：board = [[1,2,3],[5,4,0]]
//输出：-1
//解释：没有办法完成谜板
//
//
//
//输入：board = [[4,1,2],[5,0,3]]
//输出：5
//解释：
//最少完成谜板的最少移动次数是 5 ，
//一种移动路径:
//尚未移动: [[4,1,2],[5,0,3]]
//移动 1 次: [[4,1,2],[0,5,3]]
//移动 2 次: [[0,1,2],[4,5,3]]
//移动 3 次: [[1,0,2],[4,5,3]]
//移动 4 次: [[1,2,0],[4,5,3]]
//移动 5 次: [[1,2,3],[4,5,0]]
//
//
//
//输入：board = [[3,2,4],[1,5,0]]
//输出：14
//
//
// 提示：
//
//
// board 是一个如上所述的 2 x 3 的数组.
// board[i][j] 是一个 [0, 1, 2, 3, 4, 5] 的排列.
//
// Related Topics 广度优先搜索 数组 矩阵
// 👍 167 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    // 广度优先搜索
    let steps = 0;
    const target = [[1,2,3],[4,5,0]];
    const queue = [board];
    const statusSet = new Set();

    while (queue.length) {
        const status = queue.pop();
        if (status === target) {
            return steps;
        }
        const newStatus = getNewStatus(status);
        for (const status of newStatus) {
            statusSet.add(status);
        }
        queue.unshift(...newStatus);
        steps++;
    }

    return -1;
};

function getNewStatus(status) {
    switch (0) {
        case status[0][0]:
            return [
                [[status[0][1], 0, status[0][2]], status[1]],
                [[status[1][0]], status[0][1], status[0][2]], [0, status[1][1], status[1][2]]
            ];
        case status[0][1]:
            return [
                [[0, status[0][0], status[0][2]], status[1]],
                [[status[0][0], status[0][2], 0], status[1]],
                [[status[0][0], status[1][1], status[0][2]], [status[1][0], 0, status[1][2]]]
            ]
        case status[0][2]:
            return [
                [],
                [],
            ];
        case status[1][0]:
            return [
                [],
                []
            ];
        case status[1][1]:
            return [
                [],
                [],
                []
            ];
        case status[1][2]:
            return [
                [],
                []
            ];
    }
}

let board = [[1,2,3],[4,0,5]];
console.log(slidingPuzzle(board));  // 1
board = [[1,2,3],[5,4,0]];
console.log(slidingPuzzle(board));  // -1
board = [[4,1,2],[5,0,3]];
console.log(slidingPuzzle(board));  // 5
board = [[3,2,4],[1,5,0]];
console.log(slidingPuzzle(board));  // 14
// 时间复杂度：O()
// 空间复杂度：O(n)
// n === max(queue.length)
//leetcode submit region end(Prohibit modification and deletion)

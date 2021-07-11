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
    const neighbors = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
    const target = '123450';
    const sb = [];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            sb.push(board[i][j]);
        }
    }

    const initial = sb.join('');
    if ('123450' === initial) {
        return 0;
    }

    let step = 0;
    const queue = [initial];
    const check = new Set([initial]);

    while (queue.length) {
        step++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const status = queue.shift();
            for (const next of get(status, neighbors)) {
                if (check.has(next)) {
                    continue;
                }
                if (next === target) {
                    return step;
                }
                queue.push(next);
                check.add(next);
            }
        }
    }

    return -1;
};

function get(status, neighbors) {
    const result = [];
    const array = Array.from(status);
    const x = status.indexOf('0');
    for (const y of neighbors[x]) {
        [array[x], array[y]] = [array[y], array[x]];
        result.push(array.join(''));
        // 归位
        [array[x], array[y]] = [array[y], array[x]];
    }

    return result;
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
//n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
//
//
//
// 上图为 8 皇后问题的一种解法。
//
// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
//
// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
//
// 示例:
//
// 输入: 4
//输出: [
// ['.Q..',  // 解法 1
//  '...Q',
//  'Q...',
//  '..Q.'],
//
// ['..Q.',  // 解法 2
//  'Q...',
//  '...Q',
//  '.Q..']
//]
//解释: 4 皇后问题存在两个不同的解法。
//
// Related Topics 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
    //行不能相同
    //列不能相同
    //行+列不能相同
    //行-列不能相同

    // 1.how to find the first
    // 2.how to find the next
    // 3.how to terminate the execution

    let result = [];
    // 1.how to find the first
    find(n, 0);
    return result;

    function find(n, row, cache = []) {
        // 3.how to terminate the execution
        if (row === n) {
            result.push(printResult(cache));
        }

        // 回溯递归：递归与迭代相结合
        for (let col = 0; col < n; col++) {
            if (match(col, row, cache)) {
                // 2.how to find the next
                find(n, row + 1, [...cache, col]);
            }
        }
    }

    function match(col, row, cache) {
        // need to match on every cell
        return cache.every((prevCol, prevRow) => {
            return col !== prevCol &&
                row + col !== prevRow + prevCol &&
                row - col !== prevRow - prevCol;
        });
    }

    function printResult(rawResult) {
        return rawResult.map(col => {
            let oneRow = new Array(n).fill('.');
            oneRow[col] = 'Q';
            return oneRow.join('');
        });
    }
};

const expectedOutput = [
    ['.Q..',  // 解法 1
        '...Q',
        'Q...',
        '..Q.'],

    ['..Q.',  // 解法 2
        'Q...',
        '...Q',
        '.Q..']
]

let actualResult = JSON.stringify(solveNQueens(8));
console.log(actualResult);
console.log(actualResult === JSON.stringify(expectedOutput));
//leetcode submit region end(Prohibit modification and deletion)

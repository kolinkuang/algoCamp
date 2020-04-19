//给定一个二维网格和一个单词，找出该单词是否存在于网格中。
//
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
//
//
//
// 示例:
//
// board =
//[
//  ['A','B','C','E'],
//  ['S','F','C','S'],
//  ['A','D','E','E']
//]
//
//给定 word = "ABCCED", 返回 true
//给定 word = "SEE", 返回 true
//给定 word = "ABCB", 返回 false
//
//
//
// 提示：
//
//
// board 和 word 中只包含大写和小写英文字母。
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3
//
// Related Topics 数组 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    // 1.怎么找
    // 2.什么时候终止
    // 3.find内部， 怎么找下一步（缓存存储中间的过程）

    if (board.length === 0) {
        return false;
    }
    if (word.length === 0) {
        return true;
    }

    const totalRow = board.length;
    const totalCol = board[0].length;

    //怎么找
    for (let i = 0; i< totalRow; i++) {
        for (let j = 0; j < totalCol; j++) {
            const result = find(i, j, 0);
            if (result) {
                return true;
            }
        }
    }

    return false;

    function find(i, j, current) {
        // 越界要终止
        if (i >= totalRow || i < 0) {
            return false;
        }
        if (j >= totalCol || j < 0) {
            return false;
        }

        const letter = board[i][j];
        // 若字母不匹配
        if (letter !== word[current]) {
            return false;
        }

        // 找到最后一个，而且匹配，返回true
        if (current === word.length - 1) {
            return true;
        }

        // 终止条件
        board[i][j] = undefined; // 当前路径标记为null

        // 递归调用
        const result = find(i-1, j, current+1) ||
                    find(i+1, j, current+1) ||
                    find(i, j-1, current+1) ||
                    find(i, j+1, current+1);

        board[i][j] = letter;
        return result;
    }
};

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
//leetcode submit region end(Prohibit modification and deletion)

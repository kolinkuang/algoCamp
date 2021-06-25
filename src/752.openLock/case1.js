//你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
// 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
//
// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
//
// 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
//
// 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
//
//
//
// 示例 1:
//
//
//输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
//输出：6
//解释：
//可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
//注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
//因为当拨动到 "0102" 时这个锁就会被锁定。
//
//
// 示例 2:
//
//
//输入: deadends = ["8888"], target = "0009"
//输出：1
//解释：
//把最后一位反向旋转一次即可 "0000" -> "0009"。
//
//
// 示例 3:
//
//
//输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], targ
//et = "8888"
//输出：-1
//解释：
//无法旋转到目标数字且不被锁定。
//
//
// 示例 4:
//
//
//输入: deadends = ["0000"], target = "8888"
//输出：-1
//
//
//
//
// 提示：
//
//
// 死亡列表 deadends 的长度范围为 [1, 500]。
// 目标数字 target 不会在 deadends 之中。
// 每个 deadends 和 target 中的字符串的数字会在 10,000 个可能的情况 '0000' 到 '9999' 中产生。
//
// Related Topics 广度优先搜索 数组 哈希表 字符串
// 👍 274 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    // 广搜 + 哈希表
    // 一种状态转换到另一种状态
    // 问题求解树：每种状态可以转换为八种子状态

    if (target === '0000') {
        return 0;
    }

    const dead = new Set(deadends);
    if (dead.has(target)) {
        return -1;
    }

    let step = 0;
    const checkSet = new Set();
    checkSet.add('0000');
    const queue = ['0000'];
    while (queue.length) {
        step++;
        for (let i = 0; i < queue.length; i++) {
            const cur = queue.pop();
            if (cur === target) {
                return step;
            }
            for (const next of get(cur)) {
                if (!checkSet.has(next) && !dead.has(next)) {
                    // if (cur === target) {
                    //     return step;
                    // }
                    queue.unshift(next);
                    checkSet.add(next);
                }
            }
        }
    }

    return -1;
};

function get(str) {
    const result = [];
    const array = Array.from(str);
    for (let i = 0; i < array.length; i++) {
        let num = +array[i];
        array[i] = backwards(num);
        result.push(array.join(''));

        array[i] = forwards(num);
        result.push(array.join(''));
    }

    console.log('result:', result);

    return result;
}

function backwards(num) {
    return num === 0 ? '9' : num - 1;
}

function forwards(num) {
    return num === 9 ? 0 : num + 1;
}

const deadends = ['0201','0101','0102','1212','2002'];
const target = '0202';
console.log(openLock(deadends, target));
// 6
//leetcode submit region end(Prohibit modification and deletion)

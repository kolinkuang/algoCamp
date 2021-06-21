//二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。每个 LED 代表一个 0 或 1，最低位在右侧。
//
//
//
// 例如，下面的二进制手表读取 "3:25" 。
//
//
//
//
// （图源：WikiMedia - Binary clock samui moon.jpg ，许可协议：Attribution-ShareAlike 3.0
//Unported (CC BY-SA 3.0) ）
//
// 给你一个整数 turnedOn ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 按任意顺序 返回答案。
//
// 小时不会以零开头：
//
//
// 例如，"01:00" 是无效的时间，正确的写法应该是 "1:00" 。
//
//
// 分钟必须由两位数组成，可能会以零开头：
//
//
// 例如，"10:2" 是无效的时间，正确的写法应该是 "10:02" 。
//
//
//
//
// 示例 1：
//
//
//输入：turnedOn = 1
//输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
//
//
// 示例 2：
//
//
//输入：turnedOn = 9
//输出：[]
//
//
//
//
// 解释：
//
//
// 0 <= turnedOn <= 10
//
// Related Topics 位运算 回溯算法
// 👍 265 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    // 位运算
    // min: 0 - 59
    // hour: 0 - 23

    const result = [];

    for (let i = 0; i < 12; i++) {
        const hour = i.toString(2).split('0').join('').length;
        if (hour > turnedOn) {
            continue;
        }

        for (let j = 0; j < 60; j++) {
            const min = j.toString(2).split('0').join('').length;
            if (hour + min === turnedOn) {
                result.push(`${i}:${j < 10 ? '0' + j : j}`);
            }
        }
    }

    return result;
};

// 时间复杂度：O(1)
// 空间复杂度：O(1)

console.log(readBinaryWatch(1));
//leetcode submit region end(Prohibit modification and deletion)

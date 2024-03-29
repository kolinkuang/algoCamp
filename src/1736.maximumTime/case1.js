//给你一个字符串 time ，格式为 hh:mm（小时：分钟），其中某几位数字被隐藏（用 ? 表示）。
//
// 有效的时间为 00:00 到 23:59 之间的所有时间，包括 00:00 和 23:59 。
//
// 替换 time 中隐藏的数字，返回你可以得到的最晚有效时间。
//
//
//
// 示例 1：
//
//
//输入：time = "2?:?0"
//输出："23:50"
//解释：以数字 '2' 开头的最晚一小时是 23 ，以 '0' 结尾的最晚一分钟是 50 。
//
//
// 示例 2：
//
//
//输入：time = "0?:3?"
//输出："09:39"
//
//
// 示例 3：
//
//
//输入：time = "1?:22"
//输出："19:22"
//
//
//
//
// 提示：
//
//
// time 的格式为 hh:mm
// 题目数据保证你可以由输入的字符串生成有效的时间
//
// Related Topics 字符串
// 👍 42 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    // 状态机
    const map = {
        0(list) {
            return +list[1] < 4 || list[1] === '?' ? 2 : 1;
        },
        1(list) {
            return [0, 1].includes(+list[0]) ? 9 : 3;
        },
        3() {
            return 5;
        },
        4() {
            return 9;
        }
    };

    const holders = [];
    for (let i = 0; i < time.length; i++) {
        if (time[i] === '?') {
            holders.push(i);
        }
    }

    const timeList = time.split('');
    for (const idx of holders) {
        timeList[idx] = map[idx](timeList);
    }

    return timeList.join('');
};

let time = '0?:3?';
console.log(maximumTime(time));
// '09:39'

time = '?4:03';
console.log(maximumTime(time));
// '14:03'

time = '??:3?';
console.log(maximumTime(time));
// '23:39'

// 时间复杂度：O(1)
// 空间复杂度：O(1)
//leetcode submit region end(Prohibit modification and deletion)

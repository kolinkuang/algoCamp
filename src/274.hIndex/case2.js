//给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。
//
// h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）总共有 h 篇论文分别被引
//用了至少 h 次。且其余的 N - h 篇论文每篇被引用次数 不超过 h 次。
//
// 例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。
//
//
//
// 示例：
//
//
//输入：citations = [3,0,6,1,5]
//输出：3
//解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
//     由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
//
//
//
// 提示：如果 h 有多种可能的值，h 指数是其中最大的那个。
// Related Topics 数组 计数排序 排序
// 👍 152 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    // 计数排序
    const length = citations.length;
    const counter = new Array(length + 1).fill(0);
    let total = 0;

    // 顺序
    for (let i = 0; i < length; i++) {
        if (citations[i] >= length) {
            counter[length]++;
        } else {
            counter[citations[i]]++;
        }
    }

    // 逆序
    for (let i = length; i > 0; i--) {
        total += counter[i];
        if (total >= i) {
            return i;
        }
    }

    return 0;
};

let citations = [3, 0, 6, 1, 5];
// [0, 1, 3, 5, 6]
console.log(hIndex(citations));
// 3

citations = [1, 3, 1,];
console.log(hIndex(citations));
// 1

citations = [6, 6, 4, 8, 4, 3, 3, 10];
console.log(hIndex(citations));
// 4

citations = [1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3];
console.log(hIndex(citations));
// 6

// 时间复杂度：O(nlog(n))
// 空间复杂度：O(n)
// n === citations.length
//leetcode submit region end(Prohibit modification and deletion)

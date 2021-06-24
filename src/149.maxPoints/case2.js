//给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。
//
//
//
// 示例 1：
//
//
//输入：points = [[1,1],[2,2],[3,3]]
//输出：3
//
//
// 示例 2：
//
//
//输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
//输出：4
//
//
//
//
// 提示：
//
//
// 1 <= points.length <= 300
// points[i].length == 2
// -104 <= xi, yi <= 104
// points 中的所有点 互不相同
//
// Related Topics 几何 哈希表 数学
// 👍 252 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const length = points.length;
    if (length <= 2) {
        return length;
    }

    let result = 0;
    for (let i = 0; i < length; i++) {
        if (result >= length - i || result > length / 2) {
            break;
        }

        const map = new Map(); // map: 斜率 => 出现次数

        for (let j = i + 1; j < length; j++) {
            let x = points[i][0] - points[j][0];
            let y = points[i][1] - points[j][1];
            if (x === 0) {
                y = 1;
            } else if (y === 0) {
                x = 1;
            } else {
                if (y < 0) {
                    x *= -1;
                    y *= -1;
                }

                const calXY = cal(Math.abs(x), Math.abs(y));
                x /= calXY;
                y /= calXY;
            }
            const key = y + x * 20001;
            map.set(key, (map.get(key) || 0) + 1);
        }

        let maxN = 0;
        for (const num of map.values()) {
            maxN = Math.max(maxN, num+1);
        }

        result = Math.max(result, maxN);
    }

    return result;
};

// 求最大公约数
function cal(a, b) {
    return b !== 0 ? cal(b, a % b) : a;
}

// 时间复杂度：O(n^2 * log(m))
// 空间复杂度：O(n)
// n: 点的数量
// m: 横纵坐标差的最大值
//leetcode submit region end(Prohibit modification and deletion)

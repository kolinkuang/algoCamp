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

    const map = new Map(); // map: 斜率 => 出现次数
    const [x0, y0] = points[0];
    for (let i = 1; i < length; i++) {
        const [xi, yi] = points[i];
        const ki = (yi - y0) / (xi - x0);
        map.set(ki, (map.get(ki) || 0) + 1);

        const count = map.get(ki);
        if (count > length / 2) {
            return count + 1;
        }
    }

    console.log(map);

    let max = 0;
    for (const count of map.values()) {
        max = Math.max(max, count);
    }

    return max + 1;
};
//leetcode submit region end(Prohibit modification and deletion)

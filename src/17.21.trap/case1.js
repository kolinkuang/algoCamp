// 面试题 17.21. 直方图的水量
// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
//
//
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。
//
// 示例:
//
//     输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let result = 0;
    const n = height.length;
    let left = 0, right = n - 1, leftMax = 0, rightMax = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (height[left] < height[right]) {
            result += leftMax - height[left];
            left++;
        } else {
            result += rightMax - height[right];
            right--;
        }
    }

    return result;
};

const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(input) === 6);

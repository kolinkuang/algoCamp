public class Solution5 {

//    给定一个n * m 的矩阵 carrot, carrot[i][j] 表示(i, j) 坐标上的胡萝卜数量。 从矩阵的中心点出发，每一次移动都朝着四个方向中胡萝卜数量最多的方向移动，保证移动方向唯一。 返回你可以得到的胡萝卜数量。

//    示例 1:
//    输入:
//    carrot =
//            [[5, 7, 6, 3],
//            [2,  4, 8, 12],
//            [3, 5, 10, 7],
//            [4, 16, 4, 17]]
//    输出: 83
//    解释：起点坐标是(1, 1), 移动路线是：4 -> 8 -> 12 -> 7 -> 17 -> 4 -> 16 -> 5 -> 10

//    示例 2:
//    输入:
//    carrot =
//            [[5, 3, 7, 1, 7],
//            [4, 6, 5, 2, 8],
//            [2, 1, 1, 4, 6]]
//    输出: 30
//    解释：起始点是 (1, 2), 移动路线是： 5 -> 7 -> 3 -> 6 -> 4 -> 5

//    public int pickCarrots(int[][] carrots) {
//        //TODO
//        if (carrots.length == 0) {
//            return 0;
//        }
//
//        int totalRow = carrots.length;
//        int totalCol = carrots[0].length;
//
//        for (int row = 0; row < totalRow; row++) {
//            for (int col = 0; col < totalCol; col++) {
////                if (find(row, col, 0)) {
//
//                }
//            }
//        }
//
//
////        return 0;
//    }
//
//    private int find() {
//
//    }
//
//    public static void main(String[] args) {
//        Solution5 solution = new Solution5();
//        int[][] carrots = new int[][]{};
//        int result = solution.pickCarrots(carrots);
//        System.out.println("result is: " + result); //true
//    }

}

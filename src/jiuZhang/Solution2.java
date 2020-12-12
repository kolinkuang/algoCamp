/**
 * 给定一个矩阵 matrix，matrix[i][j] 表示你到达第 i 行第 j 列可以得到的分数，现在你要用第 0 行任意一点出发，从每行里找到一个点进行跳跃，每次从 (i,j) 到 (i+1, j) 跳跃需要消耗 |j-k| 的分数，请问到最后一行以后，你最多可以得到多少分。
 * */
public class Solution2 {

    public int maximumScore(int[][] matrix) {
        //TODO


        return 0;
    }

    public static void main(String[] args) {
        Solution2 solution = new Solution2();
        int[][] matrix = new int[][]{{1,2},{3,4}};
        long result = solution.maximumScore(matrix);
        System.out.println("result is: " + result); //6
    }

}

public class Solution3 {

//    给出两个只有 'l', 'r' 的字符串  和 ，以及一个整数 。 请求出能否按照以下规则，将  转换成 ，如果能，返回真，否则返回假。
//
//            'l' 字符只能向左移动（与它左边的字符交换位置），'r' 只能往右移（与它右边的字符交换位置）。
//            'l' 和 'r' 字符相互之间交换的最大次数为 。
//    设  和  的长度为 ，。 最大 'l', 'r' 交换次数为 ，。
//
//    说明
//"lrlrl" -> "lrllr" -> "llrlr" -> "lllrr"

    public boolean LRString(String s, String t, int n) {
        //TODO
        return false;
    }

    public static void main(String[] args) {
        Solution3 solution = new Solution3();
        String s = "lrlrl";
        String t = "lllrr";
        int n = 3;
        boolean result = solution.LRString(s, t, n);
        System.out.println("result is: " + result); //true
    }

}

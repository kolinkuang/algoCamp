public class Solution4 {

//    有一个进货商，到工厂里挑选一批商品，工厂中一共提供了  件商品。 他会给这些商品打分，商品会被区分为优秀和良好两种品质，如果第  个商品是优秀的，它就会被打分为 ，否则被打分为 。 进货商会将这些商品中 分数 大于等于 (最大分数 * ) 的商品认定为有价值的，并且买走它们。 请问这个进货商最多有可能买走多少件商品。
//
//    每个商品之间没有关联，都有可能被认定为优秀的。 一共有  样商品，，p% 满足。 分数数组  满足 。

    public int qualityInspection(int[] a, int[] b, int p) {
        //TODO
        return 0;
    }

    public static void main(String[] args) {
        Solution4 solution = new Solution4();
        int[] a = new int[]{100, 90, 30, 59};
        int[] b = new int[]{80, 90, 25, 40};
        int p = 60;
        int result = solution.qualityInspection(a, b, p);
        System.out.println("result is: " + result); //true
    }


}

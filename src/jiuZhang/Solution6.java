import java.util.*;

public class Solution6 {

    public boolean isIsomorphic(String s, String t) {
//        ["p", [0, 2]]
//        ["a", [1]]
//        ["e", [3]]
//        ["r", [4]]

//        ["t", [0, 2]]
//        ["i", [1]]
//        ["l", [3]]
//        ["e", [4]]

        Collection<List<Integer>> values1 = getList(s);
        Collection<List<Integer>> values2 = getList(t);

        return values1.toString().equals(values2.toString());
    }

    private Collection<List<Integer>> getList(String ss) {
        Map<Character, List<Integer>> map = new LinkedHashMap<>();

        for (int i = 0; i < ss.length(); i++) {
            Character x = ss.charAt(i);
            if (map.get(x) != null) {
                map.get(x).add(i);
            } else {
                List<Integer> list = new ArrayList<>();
                list.add(i);
                map.put(x, list);
            }
        }

        return map.values();
    }


    public static void main(String[] args) {
        Solution6 solution = new Solution6();
        String s = "paper", t = "title";
        boolean result = solution.isIsomorphic(s, t);;
        System.out.println("result is: " + result); //true

        s = "egg"; t = "add";
        result = solution.isIsomorphic(s, t);
        System.out.println("result is: " + result); //true

        s = "foo"; t = "bar";
        result = solution.isIsomorphic(s, t);
        System.out.println("result is: " + result); //true
    }

}

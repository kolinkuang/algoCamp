import java.util.*;

public class Solution7 {

    public int stringCount(String str) {
        int result = 0;
        int slow = 0;
        int fast = 0;

        for (int diff = 0; diff < str.length(); diff++) {
            slow = 0;
            fast = slow + diff;
            while (fast < str.length()) {
                if (str.charAt(slow) == '0' && str.charAt(fast) == '0' && allZero(slow, fast, str)) {
                    result++;
                }
                slow++;
                fast++;
            }
        }

        return result;
    }

    private boolean allZero(int slow, int fast, String str) {
        for (int i = slow; i <= fast; i++) {
            if (str.charAt(i) != '0') {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Solution7 solution = new Solution7();

        String str = "00010011";
        int result = solution.stringCount(str);
        System.out.println("result is: " + result); // 9

        str = "010010";
        result = solution.stringCount(str);
        System.out.println("result is: " + result); // 5
    }

}

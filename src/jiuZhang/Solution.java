import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;

public class Solution {

    public long musicPairs(int[] musics) {
        // 1.establish a map, key is one side of 60, value is the other side;
        // 2.if the current element not found from the map, put it into the map as map value, and leave key as the other side;
        // 3.once the other side matches the map key, put the count adding one
        // 4.summarize the counting at last
        Map<Integer, Integer> map = new HashMap<>();
        AtomicReference<Long> count = new AtomicReference<>(0L);
        Arrays.stream(musics).forEach(music -> {
            int key = 0;
            if (music > 30 && music <= 60) {
                key = 60 - music;
            } else {
                key = music;
            }
            if (map.get(key) == null) {
                map.put(key, 60 - key);
            } else {
                count.getAndSet(count.get() + 1);
            }
        });

        return count.get();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] musics = new int[]{1, 2, 59, 60};
        long result = solution.musicPairs(musics);
        System.out.println("result is: " + result); //1
    }

}
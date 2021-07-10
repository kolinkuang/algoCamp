// 单调队列
// TODO
function solution() {
    let n = 0, k = 0;
    let arr = [];
    for (let i = 0, a; i < n; i++) {
        arr.push(a);
    }

    const q = [];
    for (let i = 0; i < n; i++) {
        while (q.length && arr[q.length - 1] < arr[i]) {
            q.pop();
        }
        q.push(arr[i]);
        if (i - q[0] === k) {
            q.shift();
        }
        if (i + 1 < k) {
            continue;
        }
        console.log(arr[q[0]]);
    }

    return 0;
}

let input = [8, 3];
console.log(solution(input));
// 1 3 -1 -3 5 3 6 7

input = [-1, -3, -3, -3, 3, 3];
console.log(solution(input));
// 3 3 5 5 6 7

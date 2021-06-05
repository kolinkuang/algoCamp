function binarySearch(arr, n, x) {
    let head = 0, tail = n - 1, mid;
    while (head <= tail) {
        mid = head + Math.floor((tail - head) >> 1);
        if (arr[mid] === x) {
            return mid;
        }
        if (arr[mid] < x) {
            head = mid + 1;
        } else {
            tail = mid - 1;
        }
    }

    return -1;
}

// console.log(binarySearch(10));


function binarySearch01(arr, n, x) {
    let head = 0, tail = n - 1, mid;
    while (head < tail) {
        mid = head + Math.floor((tail - head) >> 1);
        if (arr[mid] < x) {
            head = mid + 1; // 查找右半部
        } else {
            tail = mid; // 查找左半部
        }
    }

    console.log(`arr[${head}]=${x}`);
    return head;
}

let arr = [5, 7, 11, 13, 15, 20, 23, 24, 27, 28], n = 10, x = 14;
console.log(binarySearch01(arr, n, x));

arr = [1, 2, 3, 5, 7, 11, 14, 16, 20, 21];
x = 11;
console.log(binarySearch01(arr, n, x));

function mergeSort(arr) {
    _mergeSort(arr, 0, arr.length - 1);
    return arr;
}

function _mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }

    const mid = Math.floor((right - left) >> 1) + left;
    _mergeSort(arr, left, mid);
    _mergeSort(arr, mid + 1, right);

    const temp = new Array(right - left + 1);
    let k = 0, p1 = left, p2 = mid + 1;
    while (p1 <= mid || p2 <= right) {
        if (p2 > right || p1 <= mid && arr[p1] <= arr[p2]) {
            temp[k++] = arr[p1++];
        } else {
            temp[k++] = arr[p2++];
        }
    }

    for (let i = 0; i < temp.length; i++) {
        arr[left + i] = temp[i];
    }
}

// const input = [5, 4, 7, 3, 8, 9, 1, 0, 2, 6];
const input = [999,9999,99999, 0,1,2];
console.log(mergeSort(input));

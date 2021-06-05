function mergeSort(input) {
    _mergeSort(input, 0, input.length - 1);
    return input;
}

function _mergeSort(arr, left, right) {
    if (left >= right) {
        return arr;
    }

    const mid = (left + right) >> 1;
    _mergeSort(arr, left, mid);
    _mergeSort(arr, mid + 1, right);

    const temp = new Array(right - left + 1);
    let k = 0, p1 = left, p2 = mid + 1;
    while (p1 <= mid || p2 <= right) {
        if ((p2 > right) || (p1 <= mid && arr[p1] <= arr[p2])) {
            temp[k++] = arr[p1++];
        } else {
            temp[k++] = arr[p2++];
        }
    }

    for (let i = left; i <= right; i++) {
        arr[i] = temp[i - left];
    }

    return arr;
}

const input = [5,95,4,45,7,3,8,9,1,0,78,2,6];
console.log(mergeSort(input));

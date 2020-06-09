function binarySearch(arr, val) {
  let left = arr[0],
    right = arr.length - 1;

  for (let i = left; i < right; i++) {
    mid = Math.ceil((left + right) / 2);
    console.log(left, mid, right);
    if (val < arr[mid]) {
      right = mid - 1;
    } else if (val > arr[mid]) {
      left = mid - 1;
    } else {
      console.log(mid);
      return arr[mid];
    }
  }
  return arr[mid];
}

console.log(
  binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1)
);

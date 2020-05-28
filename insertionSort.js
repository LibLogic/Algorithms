function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      }
      arr[j] = currentVal;
    }
  }
  return arr;
}

insertionSort([4, 2, 1, 7, 5, 0, 3, 6]);

//            2, 4, 1, 7, 5, 0, 3, 6;

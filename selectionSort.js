function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (arr[i] > arr[min]) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  console.log(arr);
}

selectionSort([0, 6, 8, 2, 22, 92, 14, 44, 33, 5, 3, 11, 4, 9, -1, 0]);

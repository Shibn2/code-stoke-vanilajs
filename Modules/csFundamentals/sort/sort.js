// Pivot selection by median strategy
function getMedianPivot(arr, left, right) {
  const median = Math.floor((left + right) / 2);

  const a = arr[left];
  const b = arr[median];
  const c = arr[right];

  if (a > b && a > c) return left;
  if (b > a && b > c) return median;
  return right;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  // Pivot selection with median strategy
  //   const pivotIndex = getMedianPivot(arr, 0, arr.length - 1);
  //   const pivot = arr[pivot];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSortByMedianPivot(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }

  const pivotIndex = getMedianPivot(arr, left, right);
  const pivotValue = arr[pivotIndex];

  // Swap pivotValue withRight most value
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] > arr[partitionIndex]) {
      [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
      partitionIndex++;
    }
  }

  [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];

  quickSortByMedianPivot(arr, left, partitionIndex - 1);
  quickSortByMedianPivot(arr, partitionIndex + 1, right);
}

// Merge sort
function merge(lArr, rArr) {
  let i = 0,
    j = 0;
  let out = [];
  while (i < lArr.length && j < rArr.length) {
    if (lArr[i] < rArr[j]) {
      out.push(lArr[i]);
      i++;
    } else {
      out.push(rArr[j]);
      j++;
    }
  }

  return [...out, ...lArr.slice(i), ...rArr.slice(j)];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function quickSortHandler() {
  const list = [1, 9, 8, 2, 0, 10, 11, 99, 3];

  const sortedList = quickSort(list);

  console.log(">>>>>>", sortedList);
}

function quickSortByMedianPivotHandler() {
  const list = [1, 9, 8, 2, 0, 10, 11, 99, 3];

  const sortedList = quickSortByMedianPivot(list, 0, list.length - 1);

  console.log(">>>>>>2", list);
}

function mergeSortHandler() {
  const list = [1, 32, 4, 9, 11, 12, 0, 3, 99];
  const sortedList = mergeSort(list);

  console.log("<><><><> mergeSort ", sortedList);
}

export { quickSortHandler, quickSortByMedianPivotHandler, mergeSortHandler };

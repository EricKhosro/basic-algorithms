const unSortedArray = [8, 4, 56, 6, 7, 8, 2, 1, 4, 5, 66];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  return arr;
};

console.log(bubbleSort(unSortedArray));

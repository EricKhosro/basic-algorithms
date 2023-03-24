const sortedArray = [1, 2, 3, 5, 6, 8, 11, 56, 89];

const recursiveBinarySearch = (arr, key, low, high) => {
  if (low >= high) return -1;

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === key) return mid;

  if (arr[mid] > key) return binarySearch(arr, key, low, mid - 1);
  if (arr[mid] < key) return binarySearch(arr, key, mid + 1, high);
};

const binarySearch = (arr, key) => {
  let high = arr.length;
  let low = 0;
  let location = -1;
  while (high > low && location === -1) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === key) location = mid;
    if (arr[mid] > key) high = mid - 1;
    if (arr[mid] < key) low = mid + 1;
  }

  return location;
};

console.log(binarySearch(sortedArray, 8));
console.log(recursiveBinarySearch(sortedArray, 89, 0, sortedArray.length));

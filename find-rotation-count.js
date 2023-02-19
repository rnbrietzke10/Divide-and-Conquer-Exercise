/**
 findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
 */

function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let count = 0;
  while (leftIdx < rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midValue = arr[midIdx];
    if (midIdx < rightIdx && arr[midIdx + 1] < arr[midIdx]) {
      return midIdx + 1;
    }
    if (midValue < arr[midIdx + 1]) {
      leftIdx = midIdx + 1;
    }
    if (midValue < arr[midIdx - 1]) {
      return midIdx;
    }
    if (midValue > arr[midIdx + 1]) return midIdx;
  }
  return 0;
}

module.exports = findRotationCount;

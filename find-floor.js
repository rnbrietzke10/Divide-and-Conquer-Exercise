/**
 * 
findFloor
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
Constraints

Time Complexity: O(log N)


 */

function findFloor(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  if (arr.length === 0) return -1;
  if (val >= arr[right]) return arr[right];
  if (val < arr[left] || val > arr[right]) return -1;

  while (left <= right) {
    var middleIdx = Math.floor((left + right) / 2);
    if (arr[middleIdx] === val) {
      return arr[middleIdx];
    } else if (val < arr[middleIdx] && arr[middleIdx - 1] <= val) {
      return arr[middleIdx - 1];
    } else if (val < arr[middleIdx]) {
      right = middleIdx - 1;
    } else {
      left = middleIdx + 1;
    }
  }
  return -1;
}

module.exports = findFloor;

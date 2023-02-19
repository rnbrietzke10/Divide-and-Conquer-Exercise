/*Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:
*/
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, num) {
  // establish pointers for left and right side of array
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let counter = 0;

  // loop through the array while leftIdx <= rightIdx
  while (leftIdx <= rightIdx) {
    // Find middle between pointers
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleValue = arr[middleIdx];
    // if middle value === num return index of num
    if (middleValue === num) return middleIdx;
    //  if middleIdx value is <

    counter++;
    if (counter === arr.length) break;
  }
  return -1;
}

module.exports = findRotatedIndex;

function findMiddle(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

  return middleIdx;
}

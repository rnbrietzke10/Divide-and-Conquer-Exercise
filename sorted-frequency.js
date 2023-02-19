/**
 sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
 
 */

function sortedFrequency(arr, x) {
  let firstOccur = findFirst(arr, x);
  let lastOccur = findLast(arr, x);
  if (firstOccur === -1 && lastOccur === -1) return -1;
  if (firstOccur === lastOccur || firstOccur === arr.length - 1) {
    return 1;
  }
  if (firstOccur === 0) {
    return lastOccur + 1;
  }

  if (firstOccur && lastOccur) {
    return lastOccur + 1 - firstOccur;
  }
}

module.exports = sortedFrequency;

// function notFristOrLast(right, left, mid, arr, x) {
//   if (arr[middleIdx - 1] === x && arr[middleIdx + 1] === x) {
//     return false;
//   }
// }

function findFirst(arr, x) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let counter = 0;
  if (arr[0] === x) return 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleValue = arr[middleIdx];
    if (middleValue < x) {
      leftIdx = middleIdx + 1;
    }
    if (middleValue === x && arr[middleIdx - 1] === x) {
      rightIdx = middleIdx - 1;
    } else if (middleValue !== x && arr[middleIdx + 1] === x) {
      return middleIdx + 1;
    }
    counter++;
    if (counter === arr.length) break;
  }
  return -1;
}

/******************LAST OCCURANCE OF VALUE *******************/
function findLast(arr, x) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let counter = 0;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleValue = arr[middleIdx];
    if (middleValue > x) {
      rightIdx = middleIdx - 1;
    }
    if (middleValue === x && arr[middleIdx + 1] === x) {
      leftIdx = middleIdx + 1;
    }
    if (middleValue === x && arr[middleIdx + 1] !== x) {
      return middleIdx;
    }
    counter++;
    if (counter === arr.length) break;
  }
  return -1;
}

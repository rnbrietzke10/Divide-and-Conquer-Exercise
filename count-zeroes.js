function countZeroes(arr) {
  if (arr[0] === 0) return arr.length;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleValue = arr[middleIdx];
    let prevValue = arr[middleIdx - 1];
    if (middleValue === 1) {
      leftIdx = middleIdx + 1;
    } else if (middleValue === 0 && prevValue === 0) {
      rightIdx = middleIdx - 1;
    } else if (middleValue === 0 && prevValue === 1) {
      return arr.length - middleIdx;
    }
  }
  return 0;
}

module.exports = countZeroes;

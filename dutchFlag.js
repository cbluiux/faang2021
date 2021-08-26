/*

  Examples & Questions
  Q: Do numbers on each side need to be sorted?
  Q: Do numbers need to be in original order?
  Q: What if no numbers less than pivot? greater than pivot?
  E: array: [4,1,4,3,5] pivot: 4 --> output: [1,3,4,4,5]

  Solution
  S: We'll keep two boundaries, low(starts at zero) & high(starts at arr.length - 1). We will iterate through the array from 0 and incrementing each iteration. If currElement is lower than pivot we swap with lowBoundary, if higher than swap with highBoundary.

  Test
  T: array: [1, 4, 0,  2, 3, 4, 2, 4, 5] --> output: [1, 0, 2, 3, 2, 4, 4, 4, 5]
  T: array: [8, 3, 6, 1, 4, 6, 1, 9] --> output: [1, 1, 3, 4, 6, 6, 8, 9]

  Time & Space
  O(n) time {we will loop over each element at most once} & O(1) space {we will swap in place}

 */

const dutchFlag = (arr, pivot) => {
  let lowBound = 0;
  let highBound = arr.length - 1;
  let i = 0;

  while (i < highBound) {
    if (arr[i] < pivot) {
      [arr[i], arr[lowBound]] = [arr[lowBound], arr[i]];
      lowBound++;
      i++;
    } else if (arr[i] > pivot) {
      [arr[i], arr[highBound]] = [arr[highBound], arr[i]];
      highBound--;
    } else {
      i++;
    }
  }

  return arr;
};

console.log('dutchFlag');
console.log('--------------------');
console.log(dutchFlag([1, 4, 0, 2, 3, 4, 2, 4, 5], 4));
console.log(dutchFlag([8, 3, 6, 1, 4, 6, 1, 9], 6));

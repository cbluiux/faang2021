/*

  Examples & Questions
  Q: Should the output be a new array or the existing array modified?
  Q: Array will always have at minimum two values?
  E: array: [2, 3, 4, 5] --> output: [5, 4, 3, 2]

  Solution
  S: Use classic two pointer pattern, leverage destructuring in order to avoid extra variables

  Test
  T: array: [1, 2, 3, 4, 5] --> output: [5, 4, 3, 2, 1]
  T: array: [2, 6, 3, 1, 9] --> output: [9, 1, 3, 6, 2]

  Time & Space
  O(n) time {we will loop over each element input array at most once} & O(1) space {we will use javascript destructuring which should not occupy extra space}

 */

const reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

console.log('reverseArray');
console.log('--------------------');
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([2, 6, 3, 1, 9]));

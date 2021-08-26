/*

  Examples & Questions
  Q: What if there are no zeros?
  Q: After the re-arrangement, do non-zero elements need to be in the same order as they were before?
  Q: Input array can be empty or null?
  E: array: [0, 2, 0, 0, 3, 4, 0, 5] --> output: [0, 0, 0, 0, 3, 4, 2, 5]

  Solution
  S: Use classic two pointer pattern for sorted array, set a boundary to compare against for swaps.

  *If moving zeros to back of array then set boundary at length - 1 and decrement each time a swap is made
  *If moving forward do opposite

  Test
  T: array: [1, 0, 0,  2, 3, 4, 0, 0, 5] --> output: [0, 0, 0, 0, 3, 4, 2, 1, 5]
  T: array: [2, 6, 3, 0, 1, 0, 9] --> output: [0, 0, 3, 6, 1, 2, 9]

  Time & Space
  O(n) time {we will loop over each element at most once} & O(1) space {we will swap in place}

 */

const moveZerosBack = (arr) => {
  let boundary = arr.length - 1;
  let i = 0;

  while (i < boundary) {
    if (arr[boundary] === 0) {
      boundary--;
    }

    if (arr[i] === 0) {
      [arr[i], arr[boundary]] = [arr[boundary], arr[i]];
    }

    i++;
  }

  return arr;
};

console.log('moveZerosBack');
console.log('--------------------');
console.log(moveZerosBack([1, 0, 0, 2, 3, 4, 0, 0, 5]));
console.log(moveZerosBack([2, 6, 3, 0, 1, 0, 9]));


const moveZerosForward = (arr) => {
  let boundary = 0;
  let i = arr.length - 1;

  while (i > boundary) {
    if (arr[boundary] === 0) {
      boundary++;
    }

    if (arr[i] === 0) {
      [arr[i], arr[boundary]] = [arr[boundary], arr[i]];
    }

    i--;
  }

  return arr;
};
console.log(' ')
console.log(' ')
console.log(' ')
console.log(' ')
console.log('moveZerosForward');
console.log('--------------------');
console.log(moveZerosForward([1, 0, 0, 2, 3, 4, 0, 0, 5]));
console.log(moveZerosForward([2, 6, 3, 0, 1, 0, 9]));


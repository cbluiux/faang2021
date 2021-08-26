/*

  Examples & Questions
  Q: How would you like me to return the output?
  Q: What to return if there is no result?
  Q: Array always sorted?
  Q: Array can have duplicates?
  Q: Array only positive int?
  Q: Target always given?
  Q: More than one pair which qualify?
  E: array: [2, 3, 4, 5] target: 7 --> output: [2, 5]

  Solution
  S: Use classic two pointer pattern for sorted array, hashmap if unsorted

  Test
  T: array: null target: 7 --> output: null
  T: array: [] target: 7 --> output: null
  T: array: [1] target: 3 --> output: null
  T: array: [1, 2, 3, 4, 5] target: 5 --> output: [1, 2]
  T: array: [2, 6, 3, 1, 9] target: 10 --> output: [3, 4]

  Time & Space
  O(n) time {we will loop over each element at most once} & O(n) space {we will store a key value pair for at max total amounts of elements in nums - 1}

 */

// Code using hashmap
const twoSumHash = (nums, target) => {
  if (nums === null || nums.length < 2) return null;

  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let compliment = target - nums[i];

    if (hash[compliment]) {
      return [hash[compliment], i];
    } else {
      hash[curr] = i;
    }
  }
};

// Code using pointers
const twoSumPointers = (nums, target) => {
  if (nums === null || nums.length < 2) return null;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    currSum = nums[left] + nums[right];

    if (currSum === target) return [left, right];
    if (currSum > target) right--;
    if (currSum < target) left++;
  }
};

console.log('twoSumHash');
console.log('--------------------');
console.log(twoSumHash(null, 7));
console.log(twoSumHash([], 7));
console.log(twoSumHash([1], 3));
console.log(twoSumHash([1, 2, 3, 4, 5], 5));
console.log(twoSumHash([2, 6, 3, 1, 9], 10));
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
console.log('twoSumPointer');
console.log('--------------------');
console.log(twoSumPointers(null, 7));
console.log(twoSumPointers([], 7));
console.log(twoSumPointers([1], 3));
console.log(twoSumPointers([1, 2, 3, 4, 5], 5));
console.log(twoSumPointers([1, 2, 3, 6, 9, 10, 13, 15], 10));

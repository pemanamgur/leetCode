/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

function reduce(nums, fn, init) {
  let val = init; // Start with the initial value
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]); // Apply the reducer function
  }
  return val; // Return the final result
}

// Example 1
let nums1 = [1, 2, 3, 4];
let fn1 = function sum(accum, curr) {
  return accum + curr;
};
let init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

// Example 2
let nums2 = [1, 2, 3, 4];
let fn2 = function sum(accum, curr) {
  return accum + curr * curr;
};
let init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

// Example 3
let nums3 = [];
let fn3 = function sum(accum, curr) {
  return 0;
};
let init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25

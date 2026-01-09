/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  //init map
  const seen = {};
  let sum = 0;
  let maxSum = 0;

  //loop through nums
  for (let i = 0; i < nums.length; i++) {
    seen[nums[i]] = (seen[nums[i]] || 0) + 1;
    sum += nums[i];

    //shrink window
    if (i >= k) {
      sum -= nums[i - k];
      seen[nums[i - k]] -= 1;
      if (seen[nums[i - k]] === 0) {
        delete seen[nums[i - k]];
      }
    }

    //update maxSum if window is valid
    if (Object.keys(seen).length === k) {
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};
console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3));

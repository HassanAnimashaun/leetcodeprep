/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // init set
  let seen = new Set();

  //Expand window
  for (let i = 0; i < nums.length; i++) {
    // Check if dupe exists in window
    if (seen.has(nums[i])) {
      return true;
    }
    // add current element
    seen.add(nums[i]);

    //shrink window if too large
    if (seen.size > k) {
      seen.delete(nums[i - k]);
    }
  }

  //no dupes within k distance
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));



/**
 * @param {number[]} nums
 * @return {number}
 */
function twoSums(nums, target) {
  // create empty map
  const seenNum = {};

  //iterate through array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const compliment = target - num;

    //check if compliment is in map
    if (compliment in seenNum) {
      return [seenNum[compliment], i];
    }

    //store current and index in map
    seenNum[num] = i;
  }

  // return empty if no solution
  return [];
}

console.log(twoSums([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSums([3, 2, 4], 6)); // Output: [1, 2]

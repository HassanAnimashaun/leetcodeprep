/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    //init maxSum 
    let windowSum = 0;
    
    //init window
    for(let i = 0; i < k; i++){
        windowSum = nums[i]
    }

    //keep track of maxSum
    let maxSum = windowSum;

    //shirk/expand window
    for(let i = k; i < nums.length; i++){
        windowSum += nums[i]
        windowSum -= nums[i - k]
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Answer: 12.75

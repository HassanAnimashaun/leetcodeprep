/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}          
 */
var findMaxAverage = function(nums, k) {
    
    //init sum of first k element
    let sum = 0;
    for(let i = 0; i < k; i++ ){
        sum += nums[i];
    }

    let maxSum = sum;

    //start sliding window
    for(let i = k ; i < nums.length; i++){
        //removing left adding right
        sum = sum - nums[i - k] + nums[i] 
        //updating maxSum
        maxSum = Math.max(maxSum, sum)
    }

    //return max avg
    return maxSum / k 
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); //Output: 12.75000
console.log(findMaxAverage([5], 1)); //Output: 5.00000
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    //init maxVal
    
    let maxVal = 0

    //outer loop to iterate through nums
    for(let i = 0; i <= nums.length - k; i++){
        //init seen 
        let seen = []
        let valid = true

        //inner loop grow subarray
        for(let j = i ; j <= i + k - 1; j++ ){
            //check seen 
            if(seen.includes(nums[j])){
                valid = false
                break
            }else{
                seen.push(nums[j])
            }
        }

        //check for distinct and subarray length 
       if(valid && seen.length === k){
            //update maxVal
            let curentSum = seen.reduce((a,b) => a + b, 0)
            maxVal = Math.max(maxVal, curentSum)
       }
    }

    //return maxVal
    return maxVal
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
console.log(maximumSubarraySum([[4,4,4],3]));

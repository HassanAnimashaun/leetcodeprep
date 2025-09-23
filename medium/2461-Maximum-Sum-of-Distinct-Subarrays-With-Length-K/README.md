# 2461. Maximum Sum of Distinct Subarrays With Length K

## Problem Statement

You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

    The length of the subarray is k, and
    All the elements of the subarray are distinct.

Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Sliding Window 
**LeetCode Link:** https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/

## My Thought Process
 -find maximum subarray sum
	-subarray must be length of k
	- return the maximum result of the subarray
	- subarry must be distinct(no repeating numbers)
### Initial Analysis

- What is the problem asking?
    - Find the max total value of a subarray that meet the conditions 
- What are the constraints?
    - Can not contain dupes 
- What's my first intuition?
    - Using a hashset to keep to ensure no repeating values

### Approach Exploration

1. **Brute Force Approach**
    1.Loop through all possible starting indices of subarrays of length k.
        - for i = 0 to nums.length - k
    2.For each subarray starting at index i:
        - Use a set to track elements inside this subarray.
        - Loop through the next k elements:
            - If the element is already in the set → subarray is invalid → break.
            - Otherwise → add element to set and add to a running sum for this subarray.
    3.After checking the subarray:
        - If it’s valid (all distinct) → compare the sum with maxSum → update if larger.
    4.After checking all subarrays → return maxSum.
        - If no valid subarrays found → maxSum remains 0 → return 0.

   - Time: O(n * k^2)
   - Space: O(k)
   - Why this works but isn't optimal
    - Recomputing sum of k elements for every new subarray
    - Checking for dupes of each subarray separately 

2. **Optimized Approach**
   - Key insight that led to optimization
   - Time: O(?)
   - Space: O(?)

### Edge Cases Considered

- Empty input 
    0
- Single element
    0
- All same elements
    0
- etc.

# [643]. Maximum Average Subarray I


## Problem Statement

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

**Difficulty:** Easy 
**Topics:** Array, Sliding Window 
**LeetCode Link:** https://leetcode.com/problems/maximum-average-subarray-i/description/

## My Thought Process

### Initial Analysis

- What is the problem asking?
    - Find the largest average with subarray of length k
    - The subarray are next to each other 
- What are the constraints?
    - Must be the maxAvg number output
    - numbers 10^-5 are accepted
- What's my first intuition?
    - Having a place holder for the beginning number in the subarray when we move down the array to collect the next set of the array

### Approach Exploration

1. **Brute Force Approach**
   - Method
        - Outer loop for keep tracking of starting index of each subarray
        - inner loop calculates sum of the next k elements
        - compute and update maxAvg if larger
   - Time: O(n*k)
   - Space: O(1)
   - Why this works but isn't optimal
        - Inner loop recalculates sums for overlapping elements repeatedly 
        - Redundant computation
2. **Optimized Approach**
   - Key insight that led to optimization
        - Subtracting leaving element while adding the incoming element
   - Time: O(n)
   - Space: O(1)

### Edge Cases Considered

- Empty input
    0
- Single element
    maxAvg 
- All same elements
   maxAvg value
- etc.

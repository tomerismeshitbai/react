/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let n=init
    for(i=0;i<nums.length;i++){
        n = fn(n, nums[i])
    }
    return n;
};
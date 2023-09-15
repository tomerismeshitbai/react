/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = [];

    for(i = 0; i < arr.length; i++){
        newArray.push(fn(arr[i], Number(i)));
    }

    return newArray;
};
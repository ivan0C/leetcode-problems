/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    return nums.reduce((acc, val) => {
        acc.push(acc.length ? val + acc[acc.length - 1] : val);
        return acc;
    }, [])
};

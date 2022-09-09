/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let tuples = 0;
    const set = new Set();

    for (let item of s) {
        if (set.has(item)) {
            tuples += 2;
            set.delete(item);
        }
        else {
            set.add(item);
        }
    }
    return tuples + (set.size > 0 ? 1 : 0);
}
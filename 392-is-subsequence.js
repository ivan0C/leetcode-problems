/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) {
        return false;
    } else if (!s.length) {
        return true;
    }

    const listFromString = [];

    for (let i = 0; i < s.length; i++) {
        listFromString[i] = s[i];
    }
    listFromString.reverse()

    let currentElement = listFromString.pop();

    for (let i = 0; i < t.length; i++) {
        if (t[i] === currentElement) {
            currentElement = listFromString.pop();
        }
        else if (currentElement === undefined) {
            return true
        }
    }
    return currentElement ? false : true
};

console.log(
    isSubsequence(
        "abc",
        "ahbgdc"
    )
)

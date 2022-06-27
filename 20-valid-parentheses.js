/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    const openedToClosed = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    const shouldBeClosed = [];
    for (let i = 0; i < s.length; i++) {
        if (openedToClosed[s[i]])
            shouldBeClosed.push(openedToClosed[s[i]])
        else {
            if (shouldBeClosed[shouldBeClosed.length - 1] !== s[i])
                return false;
            shouldBeClosed.pop();
        }
    }
    return !shouldBeClosed.length;
};

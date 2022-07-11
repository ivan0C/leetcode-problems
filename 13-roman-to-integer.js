
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt (s) {
    const ROMAN_TO_INT_MAPPING = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let i = 0, result = 0;
    let first_value;
    let second_value;
    while (i < s.length - 1) {
        first_value = ROMAN_TO_INT_MAPPING[s[i]];
        second_value = ROMAN_TO_INT_MAPPING[s[i + 1]];
        if (second_value > first_value) {
            result += (second_value - first_value);
            i += 2;
            continue;
        }
        result += first_value;
        i++;
    }
    return s[i] ? result + ROMAN_TO_INT_MAPPING[s[i]] : result;
};

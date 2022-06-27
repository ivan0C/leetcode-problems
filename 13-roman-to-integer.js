
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
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
    while (i < s.length - 1) {
        const first_symbol = s[i], second_symbol = s[i+1];
        const first_value = ROMAN_TO_INT_MAPPING[first_symbol];
        const second_value = ROMAN_TO_INT_MAPPING[second_symbol];
        if (second_value > first_value) {
            result += (second_value - first_value);
            i++;
        }
        else {
            result += first_value;
        }
        i++;
    }
    return s[i] ? result + ROMAN_TO_INT_MAPPING[s[i]] : result;
};

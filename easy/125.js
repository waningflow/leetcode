/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s1 = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let s2 = s1.split('').reverse().join('')
    return s1 === s2
};

let s = 'A man, a plan, a canal: Panama'
console.log(isPalindrome(s))
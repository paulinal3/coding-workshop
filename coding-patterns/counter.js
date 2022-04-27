// for this patten, you use object(s) or set(s) to collect values/frequencies of values to then compare those objects
// doing so can often avoid the need for nested for loops (AKA O(n^2) time complexity) and instead create a function that is O(n) time

// EXAMPLE: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. You may assume the string contains only lowercase alphabets.

// <--------------------------------------------------> //
    // Feel free to try out the challenge for yourself before seeing how to implement the counter method! //

function validAnagram() {

}

console.log(validAnagram("", "")) // true
console.log(validAnagram("aaz", "zza")) // false
console.log(validAnagram("anagram", "nagaram")) // true
console.log(validAnagram("rat", "car")) // false
console.log(validAnagram("awesome", "awesom")) // false
console.log(validAnagram("qwerty", "qeywrt")) // true

// <--------------------------------------------------> //
    // Scroll down for alternate solution //

























// <------------------------ MY SOLUTION ---------------------> //
function validAnagramCounter(str1, str2) {
    // create empty object to keep track of letter count
    let letterCount = {};
    // count each letter in the first string
    for (let char of str1) {
        // if the the char key in the empty object does not exist, set the value equal to one. if it does exist, add one to that current value/count
        letterCount[char] = (letterCount[char] || 0) + 1;
    }
    // loop over the second string
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // if the key of the second letter in the letter count object does not exist immediately return false
        if (!letterCount[letter]) {
            return false;
            // if it does exist, remove one from the count
        } else {
            letterCount[letter] -= 1;
        }
    }
    // if the above for loop runs all the way through without breaking, return true
    return true;
}

// console.log(validAnagramCounter("", "")) // true
// console.log(validAnagramCounter("aaz", "zza")) // false
// console.log(validAnagramCounter("anagram", "nagaram")) // true
// console.log(validAnagramCounter("rat", "car")) // false
// console.log(validAnagramCounter("awesome", "awesom")) // false
// console.log(validAnagramCounter("qwerty", "qeywrt")) // true



// <-----------------------------------------------------------> //
// <-----------------------------------------------------------> //
// <-----------------------------------------------------------> //



// EXAMPLE #2: Write a function called sameFrequency. Given two positive integers, Find out if the two numbers have the same frequency of digits. 

function sameFrequency() {

}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
// <--------------------------------------------------> //
    // Scroll down for my solution //

























// <------------------------ MY SOLUTION ---------------------> //
function sameFrequencyCounter(num1, num2) {
    if (num1.toString().length !== num2.toString().length) {
        return false;
    }
    let num1Count = {};
    let num2Count = {};
    for (let num of num1.toString()) {
        num1Count[num] = (num1Count[num] || 0) + 1;
    }
    for (let num of num2.toString()) {
        num2Count[num] = (num2Count[num] || 0) + 1;
    }
    for (let key in num1Count) {
        if (num1Count[key] !== num2Count[key]) {
            return false;
        }
    }
    return true;
}

// console.log(sameFrequencyCounter(182, 281)) // true
// console.log(sameFrequencyCounter(34, 14)) // false
// console.log(sameFrequencyCounter(3589578, 5879385)) // true
// console.log(sameFrequencyCounter(22, 222)) // false
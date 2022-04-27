// for this pattern, you create points or values that correspond to an index or position and move toward the beginning, end, or middle based on a certain condition




// EXAMPLE #1: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// <--------------------------------------------------> //
    // Feel free to try out the challenge for yourself before seeing how to implement the pointer method! //

function sumZero() {

}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined
    
    // <--------------------------------------------------> //
        // Scroll down for my solution //
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// <------------------------ MY SOLUTION ---------------------> //
function sumZeroPointers(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZeroPointers([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
// console.log(sumZeroPointers([-2, 0, 1, 3])) // undefined
// console.log(sumZeroPointers([1, 2, 3])) // undefined



// <-----------------------------------------------------------> //
// <-----------------------------------------------------------> //
// <-----------------------------------------------------------> //



// EXAMPLE #2: Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string for a subsequence of the chracters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing

function isSubsequence() {

}

console.log(isSubsequence("hello", "hello world")) // true
console.log(isSubsequence("sing", "sting")) // true
console.log(isSubsequence("abc", "abracacadabra")) // true
console.log(isSubsequence("abc", "acb")) // false (order matters)

// <--------------------------------------------------> //
    // Scroll down for my solution //

























// <------------------------ MY SOLUTION ---------------------> //
function isSubsequencePointers(str1, str2) {
    let i = 0;
    for (let j = 0; j < str2.length; j++) {
        // console.log(str1[i], str2[j])
        if (str1[i] === str2[j]) {
            i++;
        }
        if (i > str1.length - 1) return true;
    }
    return false;
}

// console.log(isSubsequencePointers("hello", "hello world")) // true
// console.log(isSubsequencePointers("sing", "sting")) // true
// console.log(isSubsequencePointers("abc", "abracacadabra")) // true
// console.log(isSubsequencePointers("abc", "acb")) // false (order matters)
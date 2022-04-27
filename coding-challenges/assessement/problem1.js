// Given an array of integers arr, your task is to arrange its elements in pairs according to the following rule: first element with the last one, second one with the second-to-last, etc. In every pair, the left element should not be greater than the right one. Moreover, in every pair (arr[0], arr[n - 1]), (arr[1], arr[n - 2]), ..., the elements should be sorted in ascending order, such that positions should be swapped if the left element is greater than the right one. After processing all possible pairs, combine them together into an array for the output.

// If arr contains an number of elements, the middlemost element should not be paired with any other element, but placed at the end of the output array instead.

function solution() {
    
}

console.log(solution([1, 5, 7, 3, 2, 1])) // [1, 1, 2, 5, 3, 7]
console.log(solution([6, 7, 8, 8, 5, 3, 2])) // [2, 6, 3, 7, 5, 8, 8]

// <--------------------------------------------------> //
    // Scroll down for alternate solution //

























// <------------------------ A SOLUTION ---------------------> //
function mySolution(arr) {
    let left = 0;
    let right = arr.length - 1;
    let pairedArr = [];
    while (left < right) {
        arr[left] < arr[right] ? pairedArr.push(arr[left], arr[right]) : pairedArr.push(arr[right], arr[left]);
        left++;
        right--;
    }
    if (arr.length % 2 !== 0) {
        let extra = arr[Math.floor(arr.length/2)];
        pairedArr.push(extra);
    }
    return pairedArr;
}

console.log(mySolution([1, 5, 7, 3, 2, 1])) // [1, 1, 2, 5, 3, 7]
console.log(mySolution([6, 7, 8, 8, 5, 3, 2])) // [2, 6, 3, 7, 5, 8, 8]

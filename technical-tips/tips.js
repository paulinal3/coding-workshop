// <------------------------ TIP #1 ---------------------> //
// 1. Never assume that you are given all the information from a question.
    // always ask your interview questions before you start
    // think about edge cases
    // what are the constraints
    // sometime the main point of the question is to see what you will ask to learn more about how to go about soliving the challenge

// EXAMPLE: Write a function which takes in a string and returns counts of each character in the string
    // things to ask your interviewer for more clarity:
        // 1. is the string only going to include letters?
            // if it includes special characters, do they want that a count that too or just count the letters?
        // 2. should the count include all letters in the alphabet starting at zero or just the letters in the word?
        // 3. should we account  for spaces, numbers, and capitalization?
            // if there are capitalized letters, do they count as their own or do we group the same letters together? 
                // i.e -> {a: 1, A: 1} || {a: 2} || {A: 2}
        // 4. edgecases: 
            // if it's an empty input/string, what do they want us to return? 
                // i.e --> return null, empty obj, undefined?
            // what are considered invalid inputs?
    
    // for this example, lets say we asked all the above questions and the interview lets us know that
        // they do not want us to count special characters and only want us to count alphanumeric characters
        // they want us to group captialized and lowercase letter together in the count instead of separately
        // if it's an empty input to return an empty object

    // feel free to try this example out if you'd like before scrolling down to see my solution

function charCount() {

}

console.log(charCount("HELLO there")) // { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 }
console.log(charCount("gr8 to see u!!!")) // { '8': 1, g: 1, r: 1, t: 1, o: 1, s: 1, e: 2, u: 1 }


// <--------------------------------------------------> //
    // Scroll down for alternate solution //



















// <------------------------ A SOLUTION ---------------------> //
function charCountSol(str) {
    // make obj to return at end
    let result = {};
    // loop over string for each char
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        // if char is something else (space, period, etc.) don't do anything
        // if char is a number/letter AND key in obj, add one to count
        if (/[a-z0-9]/.test(char)) {
            // if char is a number/letter AND not in obj, add it and set value to 1
            if (result[char] > 0) {
                    result[char]++;
            } else {
                result[char] =  1;
            }
        }
    }
    return result;
    // return obj at end with keys that are lowercase alphanumeric char in string
}

// console.log(charCountSol("HELLO there")) // { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 }
// console.log(charCountSol("gr8 to see u!!!")) // { '8': 1, g: 1, r: 1, t: 1, o: 1, s: 1, e: 2, u: 1 }



// <------------------------ TIP #2 ---------------------> //
// 2. If you have time, always try to go back and see if you can refactor your code

function refactoredCharCount(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        // regex
        if (/[a-z0-9]/.test(char)) {
            result[char] ? result[char]++ : result[char] =  1;
        }
    }
    return result;
}

// console.log(refactoredCharCount("HELLO there")) // { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 }
// console.log(refactoredCharCount("gr8 to see u!!!")) // { '8': 1, g: 1, r: 1, t: 1, o: 1, s: 1, e: 2, u: 1 }
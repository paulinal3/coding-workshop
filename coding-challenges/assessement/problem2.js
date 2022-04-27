// Imagine that you are typing a passage of text but some of the letter keys on your keyboard are sticky, such that when you press them once the letters are typed twice. E.g., if the letter key "e" is sticky, pressing "e" gives you "ee".

// You are given the message text that was typed using your keyboard, and the list of letters sticky representing the letter keys which are sticky. Your task is to remove the extra letters typed by the sticky keys and return the message as initially intended.

// Note that although the characters in the sticky list are all lowercase, since uppercase letters are inputted via Shift+<letter> combination on the keyboard, uppercase equivalents of sticky letters are also typed twice when the key is pressed.

function solution() {
    
}

const text = "Heellllo, thiisss is CCodeeSiggnall!"
const sticky = ['c', 'e', 'l', 'm']
console.log(solution(text, sticky)) // "Hello, thiisss is CodeSiggnal!"
console.log(solution("BBannanna"), ['n']) // "BBanana"

// <--------------------------------------------------> //
    // Scroll down for alternate solution //

























// <------------------------ A SOLUTION ---------------------> //
function mySolution(text, sticky) {
    let arr = text.split("")
    for (let i = 0; i < arr.length; i++) {
        if (sticky.includes(arr[i].toLowerCase())) {
            arr.splice([i + 1], 1)
        }
    }
    return arr.join("");
}

// const text = "Heellllo, thiisss is CCodeeSiggnall!"
// const sticky = ['c', 'e', 'l', 'm']
// console.log(mySolution(text, sticky)) // "Hello, thiisss is CodeSiggnal!"
// console.log(mySolution("BBannanna"), ['n']) // "BBanana"
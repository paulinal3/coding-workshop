// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

function areThereDuplicates() {
    let varCount = {};
    for (let key in arguments) {
        varCount[arguments[key]] = (varCount[arguments[key]] || 0) + 1
    }
    for (let key in varCount) {
        if (varCount[key] > 1) {
            return true;
        }
    }
    return false;
}

// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
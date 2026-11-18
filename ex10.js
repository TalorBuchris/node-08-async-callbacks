// Exercise 10: Delay Message Chain
// Goal: print three messages, each after a 1-second delay, using NESTED setTimeout calls.
// Use nested callbacks (callback hell style) - no loops, no promises.
//
// Expected output:
//   Message 1
//   ...1 second...
//   Message 2
//   ...1 second...
//   Message 3
//
// Run: node ex10.js

// write your code here

const msg = 'Message ';
let count = 0;

setTimeout(() => {
    count++
    console.log(msg + count);
    setTimeout(() => {
        count++
        console.log(msg + count);
        setTimeout(() => {
            count++
            console.log(msg + count);
        }, 1000);
    }, 1000);
}, 1000);
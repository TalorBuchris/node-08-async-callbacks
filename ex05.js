// Exercise 5: System Free Memory Logger
// Goal: every 2 seconds, calculate and print the free memory percentage. Stop after 5 logs.
// Required: os.freemem(), os.totalmem(), setInterval(callback, delay), clearInterval(intervalId)
//
// Expected output:
//   Free Memory: 73.25%
//   Free Memory: 72.91%
//   Free Memory: 72.80%
//   Free Memory: 72.75%
//   Free Memory: 72.60%
//   Memory logging complete.
//
// Run: node ex05.js

const os = require("os");

// write your code here
// המטרה: כל 2 שניות לחשב ולהדפיס את אחוז הזיכרון הפנוי, ולעצור אחרי 5 הדפסות.

let count = 0;
const intervalId = setInterval(() => {
    count += 1;
    const freeMemory = (os.freemem() / os.totalmem() * 100).toFixed(2);
    console.log('Free Memory: ' + freeMemory + '%');
    
    if (count === 5){
        clearInterval(intervalId);
        console.log('Memory logging complete.')
    }
}, 2000);
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  // check if inputs are the same
    if (a === b) {
        return 0
    }
    // make the string an array so can be able to iterate 
    let arrayA = a.split('')
    let arrayB = b.split('')

    let lA = arrayA.length
    let lB = arrayB.length
    let matchedLetters = []
    let total = lA + lB
        for (var i = 0; i < lA; i++){
            if (arrayB.includes(arrayA[i])) {
                matchedLetters.push(arrayA[i])
                arrayB.splice(arrayB.indexOf(arrayA[i]), 1)
            }
        }
    return total - (matchedLetters.length * 2)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}

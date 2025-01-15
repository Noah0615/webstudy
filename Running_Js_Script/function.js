function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
/* singSong(); */

function greet(person) {
    console.log(`Hey there, ${person}!`);
}

function rant(message) {
    console.log(`${message.toUpperCase()}`);
}

function greets(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function sumArray(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}
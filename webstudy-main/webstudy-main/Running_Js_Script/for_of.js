/* const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let subreddit of subreddits) {
    console.log(subreddit);
} */

/* const seatingChart = [['Kristen', 'Erik', 'Namita'], ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'], ['Yuma', 'Sakura', 'Jack', 'Erika']];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let word of "hello world") {
    console.log(word);
} */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let numb of numbers) {
    console.log(numb * numb);
} */

const testScores = {
    keenan: 80,
    damon: 68,
    eric: 100,
    shawn: 91,
    marlon: 72,
    nadia: 83,
    vonnie: 60
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);
for (let score of Object.values(testScores)) {
    total += score;
}

console.log(total / scores.length);
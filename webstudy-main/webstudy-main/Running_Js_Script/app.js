// 할 일 목록(Todo List) 프로젝트 -------------------------------
/* let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!!!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) != targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}
if (guess === 'q') {
    console.log("OK, YOU QUIT!");
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`YOU GOT IT! It took you ${attempts} guesses`);
} --------------------------------------------------------------------------------- */

/* let totalEggs = 0
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs); 

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch();

function bankRobbery() {
    const heroes = ['Spiderman', 'wolverine', 'Black Panther', 'betwomen'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}
bankRobbery();
 */


/* const add = function (x, y) {
    return x + y;
}
 */

// 고차함수 ----------------------
/* function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTwice(rollDie);

callTenTimes(rollDie); */


/* function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
} */

/* const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
} */

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this);
        console.log(`${this.name} says MEOWWW`);
    }
}

const meow2 = cat.meow;
/* console.log("BEFORE CONDITIONAL");
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THEN 0.5!!!");
    console.log(random);
}

if (random >= 0.5) {
    console.log("YOUR NUMBER IS GREATER THEN 0.5!!!");
    console.log(random);
} */

/* const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
    console.log("UGHH I HATE MONDAYS!");
} else if (dayOfWeek === 'Saturday') {
    console.log("YAH I LOVE SATURDAYS!")
} else if (dayOfWeek === 'Saturday') {
    console.log("YAH I LOVE SATURDAYS!")
} */

/* const age = 8;

if (age < 5) {
    console.log("You are a child. you get in for free!")
} else if (age < 10) {
    console.log("You are a child, You pay $10")
} else if (age < 65) {
    console.log("You are an adult. You pay $20")
} else {
    console.log("NO!");
} */


/* const password = prompt("please enter a new password");

if (password.length > 6 && password.indexOf(' ') === -1) {

    console.log("Valid Password!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

 */

/* const age = prompt("please enter an age")
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE!")
} */

/* let firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("TRY AGAIN");
} */

/* const age = prompt("please enter an age")
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!");
} */

/* const day = 2;
if (day === 1) {
    console.log("MONDAY");
}
else if (day === 2) {
    console.log("TUESDAY");
}
else if (day === 3) {
    console.log("WEDNESDAY");
}
else if (day === 4) {
    console.log("THURSDAY");
}
else if (day === 5) {
    console.log("FRIDAY");
}
else {
    console.log("INVALID DAY");
} */

const days = 6;
switch (days) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("WEEKEND")
    default:
        console.log("INVALID DAY");
}


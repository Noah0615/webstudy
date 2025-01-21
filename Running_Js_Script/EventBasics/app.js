/* const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED");
}

function scream() {
    console.log("AHHHHHH");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you click h1!');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', scream);

function twist() {
    console.log('TWIST');
}

function shout() {
    console.log('SHOUT');
}

const tasButton = document.querySelector('#tas'); */

/* tasButton.onclick = twist;
tasButton.onclick = shout; */
/* 
tasButton.addEventListener('click', twist, { once: true });
tasButton.addEventListener('click', shout);
 */

/* const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector("#cats")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = '';
}); */

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandomColor();
    e.stopPropagation();
})
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

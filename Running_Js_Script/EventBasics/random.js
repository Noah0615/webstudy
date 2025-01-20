const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

    const [r, g, b] = newColor.match(/\d+/g).map(Number);
    if (r + g + b <= 300) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
});

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    console.log(img.src);
}

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
}

const links = document.querySelectorAll('p a');

for (link of links) {
    console.log(link.href);
}

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!';
}


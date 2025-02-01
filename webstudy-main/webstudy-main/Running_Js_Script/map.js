const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const doublenumber = number.map(function (num) {
    return num * 2;
});
console.log(doublenumber);

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'ppooop',
        score: 22
    }
]

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

console.log(titles);

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here

const firstNames = fullNames.map(function (firsts) {
    return firsts.first;
})


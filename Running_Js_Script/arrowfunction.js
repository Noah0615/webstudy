/* const add = function (x, y) {
    return x + y;
} */

/* const add = (x, y) => {
    return x + y;
} */

const square = num => {
    return num * num;
}

/* const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
} */

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b


const movies = [
    {
        title: 'Amadeus',
        score: 90
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
        score: 25
    }
]

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`;
})

const arrownewMovies = movies.map((movie) => (
    `${movie.title} - ${movie.score / 10}`
))


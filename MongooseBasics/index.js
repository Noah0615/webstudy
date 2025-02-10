const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('Connection Open');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });

<<<<<<< Updated upstream
=======
// 스키마 정의
>>>>>>> Stashed changes
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
<<<<<<< Updated upstream

// // const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// Movie.insertMany([
//     { title: 'The Shawshank Redemption', year: 1994, score: 9.3, rating: 'R' },
//     { title: 'The Godfather', year: 1972, score: 9.2, rating: 'R' },
//     { title: 'The Dark Knight', year: 2008, score: 9.0, rating: 'PG-13' },
//     { title: 'Pulp Fiction', year: 1994, score: 8.9, rating: 'R' },
//     { title: 'Schindler\'s List', year: 1993, score: 8.9, rating: 'R' }
// ])
//     .then(data => {
//         console.log("IT WORKED");
//         console.log(data);
//     })

async function removeDuplicates() {
    try {
        const movies = await Movie.find({});
        const uniqueMovies = new Map();

        movies.forEach(movie => {
            const key = `${movie.title}-${movie.year}-${movie.score}-${movie.rating}`;
            if (uniqueMovies.has(key)) {
                uniqueMovies.get(key).push(movie._id); // 여기에서 오류를 수정합니다.
            } else {
                uniqueMovies.set(key, [movie._id]);
            }
        });

        for (let [key, ids] of uniqueMovies) {
            if (ids.length > 1) {
                const idsToDelete = ids.slice(1);
                await Movie.deleteMany({ _id: { $in: idsToDelete } });
            }
        }
        console.log("중복된 영화 문서가 제거되었습니다.");
    } catch (err) {
        console.log("중복 제거 중 오류가 발생했습니다:", err);
    }
}

// removeDuplicates();
=======
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
>>>>>>> Stashed changes

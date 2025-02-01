const nums = [1, 3, 21, 1244, 14, 51, 2512, 1, 2, 231, 4, 124, 41, 41, 51, 5, 3]

console.log(Math.max(...nums));

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt']


const allPets = [...cats, ...dogs];

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

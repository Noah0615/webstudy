const express = require("express");
const app = express();
console.dir(app);

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!!")
//     // res.send({color: 'red'})
//     res.send('<h1>This is my webpage!</h1>')
// })
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!!!');
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});


app.get('/cats', (req, res) => {
    res.send('MEOW!!');
});

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! This is a post!')
});

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCH!')
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
});

// /cat => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    /* const usernameInput = document.querySelectorAll('input')[0];
    const tweetInput = document.querySelectorAll('input')[1]; */
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';


    // alert("SUBMIT!!");
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement("LI");
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    console.log(newTweet);
    tweetsContainer.append(newTweet);
}



tweetsContainer.addEventListener('click', function (e) {
    e.target.remove();
})
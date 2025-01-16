console.log("Hello!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)
console.log("GOODBYE!!")

const id = setInterval(() => {
    console.log(Math.random())
}, 3000);

//clearInterval(function) is how to stop setInterval()
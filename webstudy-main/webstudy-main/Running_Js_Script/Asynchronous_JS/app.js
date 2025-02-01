/* const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
};

console.log("Sending request to server");
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000)
console.log("I AM AT THE END OF THE FILE"); */

/* setTimeout(() => {
    document.body.style.backgroundColor = 'red';
}, 1000)

setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
}, 2000)

setTimeout(() => {
    document.body.style.backgroundColor = 'yellow';
}, 3000) */

/* setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000) */




/* delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                })
            })
        })
    })
});
delayedColorChange('teal', 6000);
 */
// THE CALLBACK VERSION
/* const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
 */

/* fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!!! (page1)")
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("IT WORKED!!!!!! (page2)")
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log("IT WORKED!!!!!! (page3)")
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR!!! (page3)")
                    })
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page2)")
            })
    })
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)")
    })
 */

/* fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch(() => {
        console.log("OH NO, A REQEST FAILED!!!")
        console.log(err)
    }) */


/* const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE WITH REQUEST!');
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })
 */

/* const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
} */


/* const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('akjsdhsa', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    }) */

/* delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
 */

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    });
}

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"

}
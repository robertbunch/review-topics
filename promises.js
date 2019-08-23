// what is a promise and why should i care?
// Does a promise make my code faster?
// No. It actually makes your code slower.
// DOes it it give me new powers?
// Node. JS runs EXACTLY the same as it does without promises

// So whats the point?
// Promises are for devs to not quit development

// What is a promise?
// A promise is just a constructor.
// - pre-promises: Q, bluebird
// The Promise constructor gives us a couple cool methods:
// - then
// - catch
// - all
// - race
// - (resolve, reject)

console.log("First line");
// a promise takes 1 arg: callback
// callback takes 2 args: resolve reject
const aPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Second Line")
        reject();// this will let the "outside world"
        // know to run "catch" method
        resolve(); //this will let the "outside world"
        // know to run "then" method

    },500)    
})

aPromise.then(()=>{
    console.log("Third Line")
})

aPromise.catch(()=>{
    console.log("There was an error")
})



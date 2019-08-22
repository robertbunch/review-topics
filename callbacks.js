// Callbacks.
// In JS, ALL functions are first-class objects.
// You can do anything with a function you can do with an object.
// You can pass them arround. You can store them in VREyeParameters.  etc.

// window.addEventListener('click',doThisOnClick)

setTimeout(()=>{

})

function doThisOnClick(){
    console.log("klajsfkdjs")
}

// window.addEventListener = function(event,callback){
//     //watch for event to happen
//     // if event happens:
//     callback()
// }


function a(x){
    return function(y){
        console.log(x+y)
    }
}
const firstFunc = a(2)
firstFunc(5);
firstFunc(6);
firstFunc(141);



function calculator(a, callback){
    callback(a)
}

squared = function(x){
    console.log(x*x)
}

cubed = function(x){
    console.log(x*x*x)
}

calculator(2,cubed);
calculator(3,squared);
calculator(5,squared);

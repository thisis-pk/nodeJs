// const gameType = require('./game.js');
// const gameBall = require('./ball.js');


// gameType.footBall(gameBall.volBall);
// console.log("End");

const fs = require('fs');
const docs = fs.readdir('./docs' , (err , data) => {
    if(err){
        console.log("Error Message");
    }else{
        console.log(data)
    }
});
console.log("One");
wait(5000, "Two");
console.log("Three");

function wait (time, message) {
    setTimeout(() => {
        console.log(message)}, time)
}

const fileread = fs.readFile('./docs/xyz.txt', 'utf-8', function(err , data){
    if(err){
        console.log("Error message");
    }else{
        console.log(data);
    }
})
console.log("File Read");
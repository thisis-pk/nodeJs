const express = require('express');
const app = express();

app.get('/' , (req , res) => {
    res.send("Hello Prabhu");
})
app.get('/alien', (req , res) => {
    res.send('Hi Alien');
})

app.get('/node' , (req , res) => {
    res.send('Welcome to NodeJS !!')
})

app.get('/summer' , (req , res) => {
    res.send('Summer Season burns');
})

app.listen(8080 , (req , res) =>{
    console.log('Running..');
});

module.exports = {app};
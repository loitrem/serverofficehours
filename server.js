
//load express
const express = require('express');

//instantiate express app
const app = express();

//middleware goes here - above routes
//code that runs between the front end before routes aka authentication




const PORT = 3000;


//routes go here
app.get('/', (req,res)=>{
    res.send('<h1>HEY IT WORKS!!!</h1>');
})


app.listen(PORT, (req,res)=>{
    console.log('Server is running', PORT);
})
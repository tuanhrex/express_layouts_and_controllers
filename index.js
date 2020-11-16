// import stuff
const express = require('express');
const app = express();





// create route
app.get('/', (req, res) => {
    res.send('Hello from faves-and-hates')
})





// app.listen

app.listen(8000, () => {
    console.log('server has started');
})

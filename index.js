const express = require('express');
const app = express();

app.use('/', (req,res) => {
    res.send('hello practice node server');
})
app.listen(5000, () => {
    console.log('listen on server 5000');
})
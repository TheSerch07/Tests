const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hola, mundo 👋</h1>')
})

app.get('/:name', (req, res) => {
    let { name } = req.params
    // console.log(res, "esto es res")
    // console.log(req, "esto es req")
    res.send('<h1>${namesfff}</h1>')
})

app.listen(3000);
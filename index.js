const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()

    .use(express.static(path.join(__dirname, '/app/public/css')))
    .use(express.static(path.join(__dirname, '/app/public/js')))
    /*
    .set('view engine', 'ejs')
    .get('/', (req, res)=> res.render('app/public/index'))
    .use(express.static('/app/public'))*/
    .get('/', (req, res)=> res.sendFile(path.join(__dirname + '/app/public/index.html')))
    .listen(PORT, ()=> console.log(`Listening on PORT ${PORT}.`));
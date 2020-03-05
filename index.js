const express = require('express');
const path = require('path');
const app = express();
const files = path.join(__dirname,'/views');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js2', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js3', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use(express.static(__dirname + '/public'));

app.use( express.static( path.join( __dirname,'/public' ) ) );

app.route('/').get( (req, res) => {
    res.sendFile(`${files}/index.html`);
} )

app.route('/experiencia').get( (req,res) => {
    res.sendFile(`${files}/experiencia.html`)
} )

app.route('/estudios').get( (req,res) => {
    res.sendFile(`${files}/estudios.html`)
} )

app.route('/contacto').get( (req,res) => {
    res.sendFile(`${files}/contacto.html`)
} )

app.listen(3000);
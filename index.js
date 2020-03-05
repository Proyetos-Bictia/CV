const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const files = path.join(__dirname,'/views');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js2', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js3', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use( express.static( path.join( __dirname,'/public' ) ) );

app.use('/contacto',bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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

app.route('/contacto').post( (req,res) => {
    console.log('entramos en post');
    let email = req.body.email;
    console.log('esto es body => ', req.body);
    res.status(200).send({
        'email': req.body.email,
        'numero': req.body.phone,
        'message': req.body.message
    })
} )

app.listen(3000);
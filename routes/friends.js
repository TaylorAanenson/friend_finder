var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());

var path = require('path');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'tay',
    database: 'friend_finder_db'
});

router.get('/new', function(req, res){
	res.sendFile(path.join(__dirname, "../public/new.html"));
});

router.get('/', function(req, res){
    connection.query('SELECT * FROM friends',function(error, results){
        if(error) throw error;
        res.json(results);
    });
});

router.post('/create', urlencodedParser, function(req, res){
    console.log(req.body);
    // connection.query(
    //     "INSERT INTO friends SET ?",
    //     [req.body],
    //     function(err, response) {
    //         if(err) throw err;
    //       res.redirect('/');
    //     }
    //   );
    res.redirect('/');
});

module.exports = router;
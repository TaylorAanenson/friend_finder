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
    database: 'friend_finder_db',
    multipleStatements: true
});

router.get('/new', function(req, res){
	res.sendFile(path.join(__dirname, "../public/new.html"));
});

router.get('/', function(req, res){
    connection.query('SELECT * FROM friends; SELECT * FROM matches',function(error, results){
        if(error) throw error;
        // console.log(results);
        // for (i in results){
        //     console.log(result[i]);
        // }
        res.json(results);
    });
});

router.post('/create', urlencodedParser, function(req, res){
    // console.log(req.body);
    var name = req.body.first+' '+ req.body.last;
    // var values = [];
    // values.push(req.body.question1,req.body.question2,req.body.question3,req.body.question4,req.body.question5,req.body.question6,req.body.question7,req.body.question8,req.body.question9,req.body.question10);
    console.log(name);


    connection.query(
        "INSERT INTO friends (name, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [name,req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q7,req.body.q8,req.body.q9,req.body.q10],
        function(err, response) {
            if(err) throw err;
            // res.redirect('/');
        }
      );

    connection.query('SELECT g1.name, g2.name, abs(g2.q1 - g1.q1) AS a1, abs(g2.q2 - g1.q2) AS a2, abs(g2.q3 - g1.q3) AS a3, abs(g2.q4 - g1.q4) AS a4, abs(g2.q5 - g1.q5) AS a5, abs(g2.q6 - g1.q6) AS a6, abs(g2.q7 - g1.q7) AS a7, abs(g2.q8 - g1.q8) AS a8, abs(g2.q9 - g1.q9) AS a9, abs(g2.q10 - g1.q10) AS a10, (abs(g2.q1 - g1.q1)+abs(g2.q2 - g1.q2)+abs(g2.q3 - g1.q3)+abs(g2.q4 - g1.q4)+abs(g2.q5 - g1.q5)+abs(g2.q6 - g1.q6)+abs(g2.q7 - g1.q7)+abs(g2.q8 - g1.q8)+abs(g2.q9 - g1.q9)+abs(g2.q10 - g1.q10)) AS total FROM friends g1 CROSS JOIN friends g2 WHERE g1.id != g2.id AND g1.name = ? ORDER BY total ASC LIMIT 1',
    [name],
    function(error, results){
        if(error) throw error;
        connection.query(
            "INSERT INTO matches (match_names) VALUES (?)",
            [name+' & '+results[0].name],
            function(err, response) {
                if(err) throw err;
                res.redirect('/');
            }
          );
        console.log(results[0].name);
        // res.render(results);
    });


    // res.redirect('/');
});

module.exports = router;
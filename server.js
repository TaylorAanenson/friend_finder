var express = require('express');
var app = express();
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public'));

var friendsRoutes = require('./routes/friends.js');
app.use('/friends', friendsRoutes);

app.listen(3000, function(){
    console.log('Sup!');
});
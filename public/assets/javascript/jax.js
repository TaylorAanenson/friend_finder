$.ajax({
    url:'/friends'
}).then (function(data){
    console.log(data[0],data[1]);
    for (var i in data[0]){
        var h5 = $('<h5>');
        h5.text(data[0][i].name);
        $('#users').prepend(h5);
    }
    for (var i in data[1]){
        var h4 = $('<h4>');
        h4.text(data[1][i].match_names);
        $('#matches').prepend(h4);
    }
});
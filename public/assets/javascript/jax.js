$.ajax({
    url:'/friends'
}).then (function(data){
    console.log(data);
    for (var i in data){
        var p = $('<p>');
        p.text(data[i].friend);
        $('body').append(p);
    }
});
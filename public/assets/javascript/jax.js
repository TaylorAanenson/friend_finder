// Pulls data from the API
$.ajax({
    url:'/friends'
}).then (function(data){
    console.log(data[0],data[1]);

    // For the users container
    for (var i in data[0]){
        var d1 = $('<div>');
        var d2 = $('<div>');
        var d3 = $('<div>');
        var img = $('<img>');
        d1.attr('class','card bg-light mb-3');
        d1.attr('id','user-body');
        d2.attr('class','card-header text-left text-dark');
        d2.text(data[0][i].name);
        d3.attr('class','card-body');
        d3.attr('id','img-body');
        img.attr('src',data[0][i].pic);
        d3.append(img);
        d1.append(d2,d3);
        $('#users').prepend(d1);
    }

    // For the matches container
    for (var i in data[1]){

        // The new user
        var d1M1 = $('<div>');
        var d2M1 = $('<div>');
        var d3M1 = $('<div>');
        var imgM1 = $('<img>');
        d1M1.attr('class','card bg-light mb-3');
        d1M1.attr('id','match-body');
        d2M1.attr('class','card-header text-left text-dark');
        d2M1.text(data[1][i].match_1_name);
        d3M1.attr('class','card-body');
        d3M1.attr('id','img-body');
        imgM1.attr('src',data[1][i].match_1_pic);
        d3M1.append(imgM1);
        d1M1.append(d2M1,d3M1);

        // The user pulled from the db
        var d1M2 = $('<div>');
        var d2M2 = $('<div>');
        var d3M2 = $('<div>');
        var imgM2 = $('<img>');
        d1M2.attr('class','card bg-light mb-3');
        d1M2.attr('id','match-body');
        d2M2.attr('class','card-header text-left text-dark');
        d2M2.text(data[1][i].match_2_name);
        d3M2.attr('class','card-body');
        d3M2.attr('id','img-body');
        imgM2.attr('src',data[1][i].match_2_pic);
        d3M2.append(imgM2);
        d1M2.append(d2M2,d3M2);
        $('#matches').prepend(d1M1,d1M2);
    }
});
var express = require('express');

var app = express();

app.use("/static",express.static("../static"));

app.get('*', function(req, res){
    res.sendFile( __dirname + "/404/" + "404.html" );
});

app.listen(9527,"127.0.0.1");
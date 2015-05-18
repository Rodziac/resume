var express = require('express');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get(/^(?!\/js|\/css|\/img|\/api).*$/, function(req, res) {

    var options = {
        root: process.env.PWD + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile('index.html', options);
});

var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);

});

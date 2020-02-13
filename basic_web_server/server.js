const express = require('express');
const path = require('path');

const app = express();
// app.use(express.static(__dirname + 'src'));
app.use(express.static('src'));

app.get('*', function(request, response) {
    // response.send("Hello this worked !!!! ");
    response.sendFile(path.join(__dirname+'/public/views/index.html'));
});

app.get('about', function(request, response) {
    // response.send("Hello this worked !!!! ");
    response.sendFile(path.join(__dirname+'/public/views/about.html'));
});

app.listen(8080);

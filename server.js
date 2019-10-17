const express = require('express');
const app = express();
const path = require('path');
var port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/dist'));

app.listen(port);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + 'dist/index.html'));
});
console.log('console listen!');
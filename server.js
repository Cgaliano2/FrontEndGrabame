const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.port || 5000);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + 'dist/index.html'));
});
console.log('console listen!');
// Create web server
var http = require('http');
// Create the server
http.createServer(function (req, res) {
    // Content type
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Read file
    var fs = require('fs');
    // Read file
    fs.readFile('comments.html', function(err, data) {
        // If error
        if (err) {
            // Display error
            return console.error(err);
        }
        // Display file
        res.write(data.toString());
        // End response
        res.end();
    });
    // Display message
    console.log('Server running at http://
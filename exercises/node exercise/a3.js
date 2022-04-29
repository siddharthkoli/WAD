const http = require('http')
var server = http.createServer();
const PORT = 3000
server.listen(PORT, function () { 
    console.log(`listening on port ${PORT}`);
});
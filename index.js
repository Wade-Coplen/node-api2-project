const server = require('./server.js');

//=========================
// watch for connections on port 5000
server.listen(5000, () => {
    console.log('Server is running on port 5000');
})






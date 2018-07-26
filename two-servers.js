const http = require('http');
const PORT_1 = 8000;
const PORT_2 = 8500;

goodArray = ["You are great!", "You rock!", "You're The Best You Ther Ever Could Be!", "Nobody is Better Than You!", "You're Beautiful!"];

badArray = ["You suck!", "You're Parents Don't Love You!", "Nobody Likes You!", "You're Adopted!"];

const handleRequest = (request, response) => {
    if (request.socket == PORT_1) {
        response.end(badArray[Math.flood(Math.random() * badArray.length)]);
    } else {
        response.end(goodArray[Math.flood(Math.random() * badArray.length)]);
    }
};

const server_1 = http.createServer(handleRequest);

server_1.listen(PORT_1, function() {
    console.log(`Server Listening on Port ${PORT_1}.`);
});


const EventEmitter = require('events');
// var emitter = new EventEmitter();

class Logger extends EventEmitter {

    log(message)
    {
        console.log(message);
        this.emit("messageLogged", {id:1, url:'http://cnn.com'})
    }

}
module.exports = Logger;
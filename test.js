const MPDPlayer = require('./index.js')
const Promise = require('bluebird')

let player = new MPDPlayer()
player.play('./test/test.mp3')

Promise.delay(4000)
.then(() => {
    player.stop()
})

const Promise = require('bluebird')
const mpd = require('mpd')
const cmd = mpd.cmd

module.exports = class MPDPlayer {

  /**
   * @public
   * @param server[IP] the MPD server address
   * @param port[Integer] the MPD server listin port
   * @return [MPDPlayer]
   */

  constructor({server='127.0.0.1',port=6600,debug=false}) {

    this.debug = debug;

    this.client = mpd.connect({
      host:server,
      port:port
    })

    this._log('ready')

  }

  /**
   * @private
   * @function output the log
   * @param ...content[Array] output content
   * @return null
   */

  _log(...content){
    if(this.debug) console.log(content);
  }

  /**
   * @public
   * @function Play song
   * @param source[String|URI]  song's file
   * @return [Promise]  source information
   */

  play(source) {

    return new new Promise((resolve, reject) => {
      this.client.sendCommand(cmd('add',[source]), (err, msg) => {
        if(err) reject(err)

        this.client.sendCommand(cmd('play',[0]), (err, msg) => {
          resolve
        })

      })
    });

  }

  /**
   * @public
   * @function stop playing
   * @param clear[Boolean] clear playlist content, set FALSE, will not clear
   * @return [Promise] playlist information
   */

  stop(clear=true){

    return new Promise((resolve, reject)=>{
      this.client.sendCommand(cmd('stop',[]), (err, msg) => {

        if(err) reject(err)

        this.client.sendCommand(cmd('clear',[], (err, msg) => {
          reslove()
        })

      })
    });

  }

  /**
   * @public
   * @function pause song playing
   * @return [Promise] current song information
   */

  pause() {

    return new Promise((resolve, reject) => {

      this.client.sendCommand(cmd('pause',[]), (err, msg) => {

        if(err) reject(err)

        resolve()

      })

    });


  }

}

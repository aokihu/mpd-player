MPD-Player
------------------

MPD-Player is aim to use MPD simply. The Project use `mpd` module, but when you use the module, must send some MPD command. My aim is to pack the usual player function, e.g. `play`,`pause`,`stop` and so on.

# Install

```javascript
npm install --save mpd-player
```
# test
you can test all function with command below
```javascript
npm test
```

# HOW TO

## Example

### Import this module
```javascript
const mpc = reuqire('mpd-player')
```

### Play music

you can play local file directly
``` javascript
mpc.play('./test.mp3')
```

or you can pass full URI path too
```javascript
mpc.play('file://./test.mp3')
```

### Stop play

when you stop playing song, mpd-player will __atuo__ clear playlist content
```javascript
mpc.stop()
```

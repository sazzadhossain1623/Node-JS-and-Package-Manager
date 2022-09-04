const fs = require('fs');

const readStream = fs.createReadStream('./text.txt')

readStream.on('data', (chunk) => {
    console.log('.................')
    console.log(chunk)
})

readStream.on('open', () => {
    console.log('stream is open')
})

setTimeout(() =>{
    readStream.pause()
    console.log('Streaming paused now')
}, 15)

setTimeout(() => {
    readStream.resume()
    console.log('Streaming resume now')
}, 200)
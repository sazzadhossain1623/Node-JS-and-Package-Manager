const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        /* 
            // Asynchronus Way
        */
        /* 
            fs.readFile('data.txt', (error, data) =>{
                if(error){
                    res.write('Faild to read data!!')
                    res.end();
                }else{
                    res.write(data)
                    res.end();
                }
            }) 
        */

        /* 
            // Synchronus Way
        */
        /* const datafs = fs.readFileSync('data.txt');
         res.write(datafs)
         res.end() */

        fs.writeFile('newData.txt', 'Hello Node JS !!!', (error) => {
            if (error) {
                res.write('Failed to write data.')
                res.end()
            } else {
                res.write('data written successfully')
                res.end()
            }
        })
    }

})

const PORT = 5000;
server.listen(PORT);

console.log(`Server is Running at ${PORT}`);
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const url_address = 'http://localhost:5000/contact?name=sazzad&country=bangladesh';

    const parsed_url = url.parse(url_address, true);
    const queryObject = parsed_url.query;
    console.log(queryObject)

})

// {
//     Url: [Function: Url],
//     parse: [Function: urlParse],
//     resolve: [Function: urlResolve],
//     resolveObject: [Function: urlResolveObject],
//     format: [Function: urlFormat],
//     URL: [class URL],
//     URLSearchParams: [class URLSearchParams],
//     domainToASCII: [Function: domainToASCII],
//     domainToUnicode: [Function: domainToUnicode],
//     pathToFileURL: [Function: pathToFileURL],
//     fileURLToPath: [Function: fileURLToPath],
//     urlToHttpOptions: [Function: urlToHttpOptions]
//   }

// console.log(url)
const PORT = 5000;
server.listen(PORT);

console.log(`Server is Running at ${PORT}`);
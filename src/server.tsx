import { createServer, IncomingMessage, ServerResponse } from 'http';
import { createFactory } from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { createReadStream } from 'fs';
import App from './components/app';
import { fetchProps } from './props';
import { lookup } from './mime-types';
import { control } from './cache-control';
var zlib = require('zlib');
var compress = require("compression")
//import './styles/index.scss';
import {
    faviconUrl,
    stylesUrl,
    reactUrl,
    reactDomUrl,
    browserUrl,
    browserMapUrl,
    propsUrl,
    containerId,
} from './constants';

console.log('Server booting...');
const isProd = process.env.NODE_ENV === 'production';
console.log('Production optimization enabled? ', isProd);
const AppFactory = createFactory(App);
const PORT = process.env.PORT || 3007;
const suffix = isProd ? '.production.min.js' : '.development.js';

createServer(async (req, res) => {
  var noop = function(){}, useDefaultOptions = {}
  compress(useDefaultOptions)(req,res,noop) // mutates the response object

    let { httpVersion, method, url } = req;
    console.log(`${httpVersion} ${method} ${url}`);
    if (!url || url === '/') {
        url = 'index.html';
    }
    try {
        if (url === 'index.html') {

            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 1));
            res.write(`<!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${faviconUrl}" rel="icon" type="image/x-icon" />
                <link rel="stylesheet"href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.css">

                <title>Mike Stone Codes</title>

            </head>
            <body>
            <div id="${containerId}">`);
            const stream = renderToNodeStream(AppFactory(fetchProps()));
            stream.pipe(res, { end: false });
            stream.on('end', () => {
                res.end(`</div>
                <script src="${reactUrl}"></script>
                <script src="${reactDomUrl}"></script>
                <script src="${browserUrl}"></script>
            </body>
            </html>`);
            });
        } else if (url === propsUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 0));
            res.end(JSON.stringify(fetchProps()));
        } else if (url === reactUrl || url === reactDomUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const name = url.replace('.js', '');
            const file = `./node_modules${name}/umd${name}${suffix}`;
            createReadStream(file).pipe(zlib.createGzip()).pipe(res);
        } else if (url === stylesUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const file = `./src/${url}`;
            createReadStream(file).pipe(zlib.createGzip()).pipe(res);
        } else if (url === browserUrl || url === browserMapUrl){
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const file = `./dist${url}`;
            createReadStream(file).pipe(zlib.createGzip()).pipe(res);
        } else {
            url = 'notfound.txt';
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 0));
            res.statusCode = 404;
            res.end('404 Not Found');
        }
    } catch (e) {
        console.error(e);
        url = 'notfound.txt';
        res.setHeader('Content-Type', lookup(url));
        res.setHeader('Cache-Control', control(isProd, 0));
        res.statusCode = 500;
        res.end('500 Internal Error');
    }
}).listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});

import { createServer, IncomingMessage, ServerResponse } from 'http';
import { createFactory } from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { createReadStream } from 'fs';
import App from './components/app';
import { lookup } from './mime-types';
import { fetchProps } from './props';
import { getListItems } from './db';

export function control(isProd: boolean, days: number): string {
    if (days === 0 || !isProd) {
        return 'public, no-cache, no-store, must-revalidate';
    }
    const sec = days * 24 * 60 * 60;
    return `public, max-age=${sec}`;
}

const styles = require('./styles/index.scss');
var zlib = require('zlib');

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
var vary = require('vary')
createServer(async (req, res) => {
    let { httpVersion, method, url } = req;
    vary(res, ' Accept-Encoding')
    if (!url || url === '/') {
        url = 'index.html';
    }
    try {
        if (url === 'index.html') {
            const css = new Set();
            var zlibStream = zlib.createGzip()
            zlibStream._flush = zlib.Z_SYNC_FLUSH
            zlibStream.pipe(res)
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 1));
            res.setHeader('Content-Encoding', 'gzip');
            zlibStream.write(`<!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${faviconUrl}" rel="icon" type="image/x-icon" />
                <title>Mike Stone Codes</title>
                 <style type="text/css">${styles._getCss()}</style>
            </head>
            <body>
              <div id="${containerId}">`
            );

            const reactStream = renderToNodeStream(AppFactory(fetchProps()));
            reactStream.pipe(zlibStream, { end: false });
            reactStream.on('end', () => {
                zlibStream.end(`</div>
                <script src="${reactUrl}"></script>
                <script src="${reactDomUrl}"></script>
                <script src="${browserUrl}"></script>
                </body>
                </html>`
                );

            });

        } else if (url === propsUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 0));
            res.end(JSON.stringify(fetchProps()));
        } else if (url === reactUrl || url === reactDomUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            res.setHeader('Content-Encoding', 'gzip');
            const name = url.replace('.js', '');
            const file = `./node_modules${name}/umd${name}${suffix}`;
            createReadStream(file).pipe(zlib.createGzip()).pipe(res);
        } else if (url === stylesUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            res.setHeader('Content-Encoding', 'gzip');
            const file = `./src/${url}`;
            createReadStream(file).pipe(zlib.createGzip()).pipe(res);
        } else if (url === browserUrl || url === browserMapUrl || url.split('.')[1] == "ttf" || url.split('.')[1] == "woff2" || url.split('.')[1] == "woff") {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            res.setHeader('Content-Encoding', 'gzip');
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

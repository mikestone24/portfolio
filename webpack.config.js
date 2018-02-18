const { CheckerPlugin } = require('awesome-typescript-loader');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = [
    {
        entry: {
            browser: './src/browser.tsx',
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            loaders: [
              {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
              {
             test:/\.(s*)css$/,
            loader:'isomorphic-style-loader!css-loader!sass-loader'
          },
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
            ],
        },
        plugins: [new CheckerPlugin(),new webpack.DefinePlugin({
        'process.env': {
            WEBPACK: JSON.stringify(true),
        }
    }) ],
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    {
        entry: {
            server: './src/server.tsx',
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            loaders: [
              {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
              {
               test:/\.(s*)css$/,
                loader:'isomorphic-style-loader!css-loader!sass-loader'
            },
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
            ],
        },
        plugins: [new CheckerPlugin()],
        target: 'node',
        externals: [nodeExternals()],
    },
];

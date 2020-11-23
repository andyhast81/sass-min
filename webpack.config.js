const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];
module.exports = {
  entry: './src/ti-index.js',
  output: {
    filename: 'ti-index.js',
    path: path.resolve(__dirname, 'assets'),
  },
  plugins,
    module:{
        rules: [
            {
            test: /\.s[ac]ss$/i,
            use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            context: './',
                            outputPath: '/',
                            publicPath: path.resolve(__dirname, 'assets')
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
            ]
        }
    ],
  },
};
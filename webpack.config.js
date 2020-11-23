const path = require('path');

module.exports = {
  entry: './src/ti-index.js',
  output: {
    filename: 'ti-index.js',
    path: path.resolve(__dirname, 'assets'),
  },
  // plugins,
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
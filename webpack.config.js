const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html', 
    filename: 'index.html', 
  inject: 'body'})

const config = {
  mode: "development",
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  target: "web",
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname + '/src')]
      },
	//   {
    //     test: /\.(.ts|tsx)?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/
    //   },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig, 
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
};

module.exports = config
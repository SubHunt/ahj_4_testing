
const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js', // имя файла с результатами сборки (должно совпадать с entry point в шаге 1)
    library: 'ajs', // название нашей библиотеки
    libraryTarget: 'umd', // UMD (Universal Module Definition https://github.com/umdjs/umd) - шаблон, который позволяет использовать RequireJS и браузер
    libraryExport: 'default', // экспортируется имя default
    globalObject: 'this', // что принимать за глобальный объект, иначе сгенерируется window, а его, как вы знаете, на платформе Node.js нет
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.txt$/i,
        use: [
          {
            loader: 'file-loader',
			options: {
				name: '[name].[ext]',
            },
          },
        ],
      }	  
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ],
};
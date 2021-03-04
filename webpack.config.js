const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
const config = require('./public/config')[isDev ? 'dev' : 'build'];
console.log('config', config);
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', //开发环境下用
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:10].js',
    publicPath: '/' // cdn的地址
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  'corejs': 3
                }
              ]
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')({
                    'overrideBrowserslist': ['>0.25%', 'not dead']
                  })
                ];
              }
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: 'style-loader' // 使用style-loader进行处理，位置必须在css-loader前面
      //     },
      //     {
      //       loader: 'css-loader' // 使用css-loader进行处理
      //     },
      //     {
      //       loader: 'less-loader' // 引入less-loader
      //     }
      //   ],

      //   exclude: /node_modules/
      // },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, //10K
              esModule: false,
              name: '[name]_[hash:6].[ext]'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      config: config.template,
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false //是否折叠空白
      }
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  devServer: {
    port: '8085',
    hot: true,
    stats: 'errors-only', //终端只打印error
    overlay: false
  }
};

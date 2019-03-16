const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackMultiBuildPlugin = require('html-webpack-multi-build-plugin');

const common = require('./webpack.common');

const modernConfig = merge(common, {
  mode: 'production',
  name: 'modern',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'MyApp Modern Version',
      inject: false,
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              targets: {
                browsers: [
                  'Chrome >= 60',
                  'Safari >= 10.1',
                  'iOS >= 10.3',
                  'Firefox >= 54',
                  'Edge >= 15',
                ],
              },
            }],
          ],
        },
      },
    }],
  },
  output: {
    filename: '[name]-modern-[contenthash].js',
  },
});

const legacyConfig = merge(common, {
  mode: 'production',
  name: 'legacy',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                targets: {
                  browsers: [
                    "Chrome >= 59",
                    "FireFox >= 44",
                    "Safari >= 7",
                    "Explorer 11",
                    "last 4 Edge versions"
                  ],
                },
              }],
            ],
          },
        }
      }
    ]
  },
  output: {
    filename: '[name]-legacy.js',
  },
});

module.exports = [modernConfig, legacyConfig];

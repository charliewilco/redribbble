import cssnext from 'postcss-cssnext'
import atImport from 'postcss-import'
import path from 'path'

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 9123
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.(js|jsx)$/, loader: 'standard', include: 'app' }

    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  standard: {
    parser: 'babel-eslint'
  },

  postcss (webpack) {
    return {
      defaults: [
        atImport({ addDependencyTo: webpack }),
        cssnext({
          features: {
            rem: false,
            calc: false
          }
        })
      ]
    }
  }
}

export default config

const path = require('path');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    modules: ['node_modules']
  },
  eslint: false,
  compilers: {
    less: {
      compress: true
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
    'preprocess': {
      filter: /config\.js$/,
      context: {
        ENV: prod ? 'production' : 'development'
      }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
};

if (prod) {
  delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {compress: true};

  // 压缩js
  module.exports.plugins = {
    'preprocess': {
      filter: /config\.js$/,
      context: {
        ENV: prod ? 'production' : 'development'
      }
    },
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}

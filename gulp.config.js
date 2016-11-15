module.exports = function () {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';
  var server = './src/server/';
  var env = '.env';

  var config = {
    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    bower: {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    },
    client: client,
    css: temp + 'styles.css',
    defaultPort: 5000,
    index: client + 'index.html',
    js: [
        clientApp + '**/*.module.js',
        clientApp + '**/*.js',
        '!' + clientApp + '**/*.spec.js'
    ],
    nodeServer: server + 'app.js',
    sass: client + 'styles/*.scss',
    server: server,
    temp: temp
  };

  config.wiredepOptions = function() {
      var options = {
          bowerJson: config.bower.json,
          directory: config.bower.directory,
          ignorePath: config.bower.ignorePath
      };
      return options;
  };

  return config;
};

module.exports = function () {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';

  var config = {
    temp: temp,
    client: client,

    // all js to vet
    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    sass: client + 'styles/*.scss'
  };

  return config;
};

module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var server = './src/server/';
    var src = './src/';
    var temp = './.tmp/';

    var config = {
            /** file paths **/
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        css: temp + 'styles.css',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        sass: client + 'styles/*.scss',
        server: server,
        source: src,
        temp: temp,
            /** browser sync **/
        browserReloadDelay: 1000,
            /** bower and npm **/
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
            /** node settings **/
        defaultPort: 5000,
        nodeServer: server + 'app.js'

    };

    config.wiredepOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};

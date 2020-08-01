const { sayHi } = require('./child');

console.log('index');
sayHi();

// "start": "nodemon --watch webpack.config.js --exec \"webpack-dev-server --mode development --progress --color\""
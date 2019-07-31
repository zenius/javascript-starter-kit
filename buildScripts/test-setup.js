
// Register babel to transpile before our tests run
// eslint-disable-next-line import/no-extraneous-dependencies
require('babel-register');

// Disable webpack features that Mocha don't understand
// eslint-disable-next-line func-names
require.extensions['.css'] = function () { };

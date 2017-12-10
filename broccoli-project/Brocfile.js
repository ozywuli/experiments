/* Brocfile.js */
var path = require('path');


// Import some Broccoli plugins
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var babel = require('broccoli-babel-transpiler');
var funnel = require('broccoli-funnel');
var concat = require('broccoli-concat');
var funnel = require('broccoli-funnel');

// Specify the Sass and Coffeescript directories
var sassDir = './scss';

// Tell Broccoli how we want the assets to be compiled
var styles = compileSass([sassDir], 'app.scss', 'app.css');


// Transpile the source files
var appJs = babel('js', {
  presets: [
    ['env', {
      'targets': {
        'browsers': ["last 2 versions"]
      }
    }]
  ]
});


appJs = concat(appJs, {
  inputFiles: ['**/*.js'],
  outputFile: '/js/my-app.js'
});


// Merge the compiled styles and scripts into one output directory.
module.exports = mergeTrees([styles, appJs]);
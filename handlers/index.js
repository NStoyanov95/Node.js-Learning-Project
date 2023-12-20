const cat = require('./cat');
const homeHandler = require('./home');
const staticFiles = require('./static-files');

module.exports = [homeHandler, staticFiles, cat];
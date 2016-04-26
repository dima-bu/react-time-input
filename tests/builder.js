require("babel-polyfill");
var testsContext = require.context(".", true, /.js$/);
testsContext.keys().forEach(testsContext);

/*jslint indent:2, node:true*/

'use strict';

// custom modules

var jqlint;

jqlint = require('jqlint');

// exports

module.exports = function (grunt) {

  grunt.registerMultiTask('jqlint', 'validate JavaScript files with jqlint', function () {
    var isFailed, options;

    isFailed = false;

    options = this.options({
      errorsOnly: true,
      failOnError: true
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {

      f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        return true;
      })
        .forEach(function (filepath) {
          var code, report, e, eLength, error;

          if (!options.errorsOnly) {
            grunt.verbose.writeln(filepath);
            grunt.log.writeln(filepath);
          }

          code = grunt.file.read(filepath);
          report = jqlint(code);
          if (Array.isArray(report.errors)) {
            eLength = report.errors.length;
            if (eLength) {
              isFailed = true;
              if (options.errorsOnly) {
                grunt.log.writeln(filepath);
              }
              grunt.log.writeln(filepath);
              for (e = 0; e < eLength; e += 1) {
                error = report.errors[e];
                grunt.log.errorlns(JSON.stringify(error));
              }
            }
          }
        });

      if (isFailed) {
        if (options.failOnError) {
          grunt.fail.warn('errors were found :(');
        } else {
          grunt.log.errorlns('errors were found :(');
        }
      } else {
        grunt.verbose.oklns('no errors found :)');
      }
    });
  });

};
